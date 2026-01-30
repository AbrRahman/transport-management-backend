import { prisma } from "../../../lib/prisma";
import { TRouteVehicle } from "./routeVehicle.interface";

const insertRouteVehicle = async (payload: TRouteVehicle) => {
  const isExistRouteVehicle = await prisma.routeVehicle.findFirst({
    where: {
      OR: [{ vehicleId: payload.routeId }, { routeId: payload.routeId }],
    },
  });

  if (isExistRouteVehicle) {
    throw new Error("This Route or Vehicle already exist");
  }
  const result = await prisma.routeVehicle.create({
    data: payload,
  });

  return result;
};

const getAllRouteVehicle = async () => {
  const result = await prisma.routeVehicle.findMany({
    include: {
      route: {
        select: {
          name: true,
          startPoint: true,
        },
      },
      vehicle: {
        select: {
          vehicleNo: true,
          driverName: true,
        },
      },
    },
  });
  return result;
};

// delete transport fee by id
const deleteRouteVehicleById = async (id: string) => {
  const result = await prisma.routeVehicle.delete({
    where: {
      id,
    },
  });
  return result;
};

const routeVehicleService = {
  insertRouteVehicle,
  getAllRouteVehicle,
  deleteRouteVehicleById,
};
export default routeVehicleService;
