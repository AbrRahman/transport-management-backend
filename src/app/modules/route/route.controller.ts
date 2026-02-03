import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import routeService from "./route.service";

const createRoute = catchAsync(async (req, res, next) => {
  const result = await routeService.createRoute(req?.body);

  res.status(status.OK).json({
    success: true,
    message: "Route created successfully",
    data: result,
  });
});
const getAllRoutes = catchAsync(async (req, res, next) => {
  const result = await routeService.getAllRoutes();

  res.status(status.OK).json({
    success: true,
    message: "Routes fetched successfully",
    data: result,
  });
});

// get routes with stops
const getRoutesWithStops = catchAsync(async (req, res, next) => {
  const result = await routeService.getRoutesWithStops();

  res.status(status.OK).json({
    success: true,
    message: "Routes with stop fetched successfully",
    data: result,
  });
});

const updateRoute = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await routeService.updateRouteById(id, req?.body);

  res.status(status.OK).json({
    success: true,
    message: "Route updated successfully",
    data: result,
  });
});
const deleteRoute = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await routeService.deleteRouteById(id);

  res.status(status.OK).json({
    success: true,
    message: "Route deleted successfully",
    data: result,
  });
});

const findRouteByUnassignedTransferFee = catchAsync(async (req, res, next) => {
  const result = await routeService.findRouteByUnassignedTransferFee();

  res.status(status.OK).json({
    success: true,
    message: "unassign transfer fee Route fetched  successfully",
    data: result,
  });
});
const routeController = {
  createRoute,
  getAllRoutes,
  updateRoute,
  deleteRoute,
  findRouteByUnassignedTransferFee,
  getRoutesWithStops,
};

export default routeController;
