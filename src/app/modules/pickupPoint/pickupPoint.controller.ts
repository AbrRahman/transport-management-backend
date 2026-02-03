import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import pickupPointService from "./pickupPoint.service";

const createPickupPoint = catchAsync(async (req, res, next) => {
  const result = await pickupPointService.createPickupPoint(req?.body);

  res.status(status.OK).json({
    success: true,
    message: "Pickup Point  created successfully",
    data: result,
  });
});
const getAllPickupPoints = catchAsync(async (req, res, next) => {
  const result = await pickupPointService.getAllPickupPoints();

  res.status(status.OK).json({
    success: true,
    message: "Pickup Point fetched successfully",
    data: result,
  });
});

// get single pickup point
const getSinglePickupPoint = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await pickupPointService.getSinglePickupPoint(id);

  res.status(status.OK).json({
    success: true,
    message: "Pickup Point fetched successfully",
    data: result,
  });
});
const updatePickupPoint = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await pickupPointService.updatePickupPointById(id, req?.body);

  res.status(status.OK).json({
    success: true,
    message: "Pickup Point updated successfully",
    data: result,
  });
});
const deletePickupPoint = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await pickupPointService.deletePickupPointById(id);

  res.status(status.OK).json({
    success: true,
    message: "Pickup Point deleted successfully",
    data: result,
  });
});

const pickupPointController = {
  createPickupPoint,
  getAllPickupPoints,
  getSinglePickupPoint,
  updatePickupPoint,
  deletePickupPoint,
};
export default pickupPointController;
