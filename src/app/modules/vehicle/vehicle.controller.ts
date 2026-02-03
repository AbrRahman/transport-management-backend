import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import vehicleService from "./vehicle.service";

const createVehicle = catchAsync(async (req, res, next) => {
  const result = await vehicleService.createVehicle(req?.body);

  res.status(status.OK).json({
    success: true,
    message: "Vehicle created successfully",
    data: result,
  });
});
const getAllVehicles = catchAsync(async (req, res, next) => {
  const result = await vehicleService.getAllVehicles();

  res.status(status.OK).json({
    success: true,
    message: "Vehicles fetched successfully",
    data: result,
  });
});

const getSingleVehicle = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await vehicleService.getSingleVehicle(id);

  res.status(status.OK).json({
    success: true,
    message: "Vehicle fetched successfully",
    data: result,
  });
});
const updateVehicle = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await vehicleService.updateVehicleById(id, req?.body);

  res.status(status.OK).json({
    success: true,
    message: "Vehicle updated successfully",
    data: result,
  });
});
const deleteVehicle = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await vehicleService.deleteVehicleById(id);

  res.status(status.OK).json({
    success: true,
    message: "Vehicle deleted successfully",
    data: result,
  });
});

const vehicleCOntroller = {
  createVehicle,
  getAllVehicles,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle,
};
export default vehicleCOntroller;
