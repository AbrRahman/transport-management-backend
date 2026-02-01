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
          contactNo: true,
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

// get all unassigned route form routeVehicle
const getAllUnassignedRoute = async () => {
  const result = await prisma.route.findMany({
    where: {
      routeVehicle: null,
    },
  });
  return result;
};

// get all unassigned vehicle form routeVehicle
const getAllUnassignedVehicle = async () => {
  const result = await prisma.vehicle.findMany({
    where: {
      routeVehicle: null,
    },
  });
  return result;
};

const routeVehicleService = {
  insertRouteVehicle,
  getAllRouteVehicle,
  deleteRouteVehicleById,
  getAllUnassignedRoute,
  getAllUnassignedVehicle,
};
export default routeVehicleService;
