import { prisma } from "../../../lib/prisma";
import { TPickupPoint } from "./pickupPoint.interface";

// create a pickup point
const createPickupPoint = async (payload: TPickupPoint) => {
  const result = await prisma.pickupPoint.create({
    data: payload,
  });
  return result;
};

// get all pickup point
const getAllPickupPoints = async () => {
  const result = await prisma.pickupPoint.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

// get single pickup point by id
const getSinglePickupPoint = async (id: string) => {
  const result = await prisma.pickupPoint.findFirst({
    where: { id },
  });
  return result;
};

// update pickup point
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

// delete a pickup point
const deletePickupPointById = async (id: string) => {
  const result = await prisma.pickupPoint.delete({
    where: { id },
  });
  return result;
};
const pickupPointService = {
  createPickupPoint,
  getAllPickupPoints,
  getSinglePickupPoint,
  updatePickupPointById,
  deletePickupPointById,
};
export default pickupPointService;
