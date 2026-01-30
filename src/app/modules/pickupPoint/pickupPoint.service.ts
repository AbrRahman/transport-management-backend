import { prisma } from "../../../lib/prisma";
import { TPickupPoint } from "./pickupPoint.interface";

const createPickupPoint = async (payload: TPickupPoint) => {
  const result = await prisma.pickupPoint.create({
    data: payload,
  });
  return result;
};

const getAllPickupPoints = async () => {
  const result = await prisma.pickupPoint.findMany();
  return result;
};

const updatePickupPointById = async (
  id: string,
  payload: Partial<TPickupPoint>,
) => {
  const result = await prisma.pickupPoint.update({
    where: { id },
    data: { ...payload },
  });
  return result;
};

const deletePickupPointById = async (id: string) => {
  const result = await prisma.pickupPoint.delete({
    where: { id },
  });
  return result;
};
const pickupPointService = {
  createPickupPoint,
  getAllPickupPoints,
  updatePickupPointById,
  deletePickupPointById,
};
export default pickupPointService;
