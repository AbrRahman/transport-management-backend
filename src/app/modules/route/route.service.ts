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

const routeService = {
  createRoute,
  getAllRoutes,
  updateRouteById,
  deleteRouteById,
};

export default routeService;
