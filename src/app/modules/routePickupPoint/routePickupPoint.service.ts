import { prisma } from "../../../lib/prisma";
import { TRoutePickupPoint } from "./routePickupPoint.insetface";

const insetRoutePickupPoint = async (payload: TRoutePickupPoint) => {
  // check route pickup point already exist or not
  const exists = await prisma.routePickupPoint.findUnique({
    where: {
      routeId_pickupPointId: {
        routeId: payload?.routeId,
        pickupPointId: payload?.pickupPointId,
      },
    },
  });
  if (exists) {
    throw new Error(
      "This pickup point is already added to this route. Please choose a different pickup point.",
    );
  }
  // check route stope order already exist or not
  const stopOrderExists = await prisma.routePickupPoint.findFirst({
    where: {
      routeId: payload?.routeId,
      stopOrder: payload?.stopOrder,
    },
  });

  if (stopOrderExists) {
    throw new Error(
      "This stop order is already in use for this route. Please choose a different stop order.",
    );
  }

  const result = await prisma.routePickupPoint.create({
    data: payload,
  });
  return result;
};

const getAllRoutePickupPoint = async () => {
  const result = await prisma.routePickupPoint.findMany({
    include: {
      route: {
        select: {
          name: true,
          endPoint: true,
        },
      },
      pickupPoint: {
        select: {
          name: true,
          location: true,
        },
      },
    },
  });
  return result;
};

// getPickupPoint by route id
const getPickupPointByRouteId = async (routeId: string) => {
  const result = await prisma.routePickupPoint.findMany({
    where: { routeId },
    orderBy: { stopOrder: "asc" },
    include: {
      pickupPoint: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return result;
};

// delete a routePickupPoint  by id
const deleteRoutePickupPointById = async (id: string) => {
  const result = await prisma.routePickupPoint.delete({
    where: {
      id,
    },
  });
  return result;
};
const routePickupPointService = {
  insetRoutePickupPoint,
  getAllRoutePickupPoint,
  deleteRoutePickupPointById,
  getPickupPointByRouteId,
};
export default routePickupPointService;
