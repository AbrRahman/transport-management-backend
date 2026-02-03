import { prisma } from "../../../lib/prisma";
import { TRoute } from "./route.interface";

// create route
const createRoute = async (payload: TRoute) => {
  const result = await prisma.route.create({
    data: payload,
  });
  return result;
};

// get all routes
const getAllRoutes = async () => {
  const result = await prisma.route.findMany();
  return result;
};

// get route with stops
const getRoutesWithStops = async () => {
  const result = await prisma.route.findMany({
    select: {
      name: true,
      endPoint: true,
      id: true,
      routePickupPoint: {
        orderBy: {
          stopOrder: "asc",
        },
        select: {
          stopOrder: true,
          id: true,
          pickupPoint: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return result;
};
// update route by id
const updateRouteById = async (id: string, payload: Partial<TRoute>) => {
  const result = await prisma.route.update({
    where: {
      id,
    },
    data: {
      ...payload,
    },
  });
  return result;
};

// delete route by id
const deleteRouteById = async (id: string) => {
  const result = await prisma.route.delete({
    where: {
      id,
    },
  });
  return result;
};

// find route by un assigned transfer fee
const findRouteByUnassignedTransferFee = async () => {
  const result = await prisma.route.findMany({
    where: {
      transportFee: null,
    },
  });
  return result;
};

const routeService = {
  createRoute,
  getAllRoutes,
  updateRouteById,
  deleteRouteById,
  findRouteByUnassignedTransferFee,
  getRoutesWithStops,
};

export default routeService;
