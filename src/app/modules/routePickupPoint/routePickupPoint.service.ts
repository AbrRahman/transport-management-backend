import { prisma } from "../../../lib/prisma";
import { TRoutePickupPoint } from "./routePickupPoint.insetface";

const insetRoutePickupPoint = async (payload: TRoutePickupPoint) => {
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
};
export default routePickupPointService;
