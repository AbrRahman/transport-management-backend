// create vehicle service

import { prisma } from "../../../lib/prisma";
import TVehicle from "./vehicle.interface";

const createVehicle = async (payload: TVehicle) => {
  const result = await prisma.vehicle.create({
    data: payload,
  });
  return result;
};

const vehicleService = {
  createVehicle,
};
export default vehicleService;
