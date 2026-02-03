import { TransportFee } from "../../../../generated/prisma";
import { prisma } from "../../../lib/prisma";

// create transportFee
const createTransportFee = async (payload: TransportFee) => {
  const isExistFee = await prisma.transportFee.findUnique({
    where: {
      routeId: payload.routeId,
    },
  });
  if (isExistFee) throw new Error("Already add transport Fee");

  const result = await prisma.transportFee.create({
    data: payload,
  });
  return result;
};

// get all transport fee
const getAllTransportFee = async () => {
  const result = await prisma.transportFee.findMany({
    include: {
      route: {
        select: {
          name: true,
          startPoint: true,
          endPoint: true,
        },
      },
    },
  });
  return result;
};
// get single transport fee
const getSingleTransportFee = async (id: string) => {
  const result = await prisma.transportFee.findFirst({
    where: {
      id,
    },
    include: {
      route: {
        select: {
          name: true,
        },
      },
    },
  });
  return result;
};

// update transport fee by id
const updateTransportFeeById = async (
  id: string,
  payload: Partial<TransportFee>,
) => {
  if (payload?.routeId) {
    const isExistRoute = await prisma.transportFee.findFirst({
      where: {
        routeId: payload?.routeId,
        NOT: { id: id },
      },
    });
    if (isExistRoute) {
      throw new Error("This route already transport fee added");
    }
  }

  const result = await prisma.transportFee.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

// delete transport fee by id
const deleteTransportFeeById = async (id: string) => {
  const result = await prisma.transportFee.delete({
    where: {
      id,
    },
  });
  return result;
};

const transportFeeService = {
  createTransportFee,
  getAllTransportFee,
  getSingleTransportFee,
  updateTransportFeeById,
  deleteTransportFeeById,
};

export default transportFeeService;
