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

const routeController = {
  createRoute,
  getAllRoutes,
  updateRoute,
  deleteRoute,
};

export default routeController;
