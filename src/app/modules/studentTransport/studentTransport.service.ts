import { prisma } from "../../../lib/prisma";
import { TTransportAssignment } from "./studentTransport.interface";

// student transport assignment and fee auto generation
const studentTransportAssignment = async (payload: TTransportAssignment) => {
  try {
    return await prisma.$transaction(
      async (tx) => {
        // check
        const isActiveStudentExist =
          await tx.studentTransportAssignment.findFirst({
            where: {
              studentId: payload.studentId,
              isActive: true,
            },
          });
        if (isActiveStudentExist) {
          throw new Error("This student are already assign a transport");
        }
        // a student assign a transport
        const transportAssign = await tx.studentTransportAssignment.create({
          data: {
            studentId: payload.studentId,
            routeId: payload.routeId,
            pickupPointId: payload.pickupPointId,
          },
        });

        // fee auto generation
        const isExistStudentFeeCurrentMonth =
          await tx.studentFeeAssignment.findFirst({
            where: {
              studentId: payload.studentId,
              routeId: payload.routeId,
              month: payload.month,
            },
          });
        if (isExistStudentFeeCurrentMonth) {
          throw new Error("Student this monte fee are already generated");
        }
        const findTransferFee = await tx.transportFee.findFirst({
          where: {
            routeId: payload.routeId,
          },
        });

        //  if route not set transfer fee throw error
        if (!findTransferFee) {
          throw new Error("At first this route add transfer fee ");
        }
        //   prepare student fee data;
        let newStudentFee = {
          studentId: payload.studentId,
          routeId: payload.routeId,
          month: payload.month,
          amount: findTransferFee?.monthlyFee,
        };

        const feeGeneration = await tx.studentFeeAssignment.create({
          data: newStudentFee,
        });
        return { transportAssign, feeGeneration };
      },
      {
        maxWait: 10000,
        timeout: 20000,
      },
    );
  } catch (error: any) {
    console.log(error, "from catch");
    throw new Error(error?.message);
  }
};

// get all transport assign

const getAllStudentTransportAssign = async () => {
  const result = await prisma.studentTransportAssignment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

// get all fee generate data
const getAllStudentTransportFee = async () => {
  const result = await prisma.studentFeeAssignment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

const studentTransportService = {
  studentTransportAssignment,
  getAllStudentTransportAssign,
  getAllStudentTransportFee,
};

export default studentTransportService;
