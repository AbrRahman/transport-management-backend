import { prisma } from "../../../lib/prisma";
import TVehicle from "./vehicle.interface";

// create vehicle
const createVehicle = async (payload: TVehicle) => {
  const result = await prisma.vehicle.create({
    data: payload,
  });
  return result;
};

// get all vehicles
const getAllVehicles = async () => {
  const result = await prisma.vehicle.findMany();
  return result;
};

// update vehicle by id
const updateVehicleById = async (id: string, payload: Partial<TVehicle>) => {
  const result = await prisma.vehicle.update({
    where: {
      id,
    },
    data: {
      ...payload,
    },
  });
  return result;
};

// delete vehicle by id
const deleteVehicleById = async (id: string) => {
  const result = await prisma.vehicle.delete({
    where: {
      id,
    },
  });
  return result;
};

const vehicleService = {
  createVehicle,
  getAllVehicles,
  updateVehicleById,
  deleteVehicleById,
};
export default vehicleService;
