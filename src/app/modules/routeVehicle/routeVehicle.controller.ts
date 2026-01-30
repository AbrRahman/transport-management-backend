import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import routeVehicleService from "./routeVechicle.service";

const insertRouteVehicle = catchAsync(async (req, res, next) => {
  const result = await routeVehicleService.insertRouteVehicle(req?.body);

  res.status(status.OK).json({
    success: true,
    message: "RouteVehicle inserted successfully",
    data: result,
  });
});
const getAllRouteVehicle = catchAsync(async (req, res, next) => {
  const result = await routeVehicleService.getAllRouteVehicle();

  res.status(status.OK).json({
    success: true,
    message: "RouteVehicle fetched successfully",
    data: result,
  });
});

const deleteRouteVehicle = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await routeVehicleService.deleteRouteVehicleById(id);

  res.status(status.OK).json({
    success: true,
    message: "RouteVehicle deleted successfully",
    data: result,
  });
});

const routeVehicleController = {
  insertRouteVehicle,
  getAllRouteVehicle,
  deleteRouteVehicle,
};

export default routeVehicleController;
