import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import routePickupPointService from "./routePickupPoint.service";

const insertRoutePickupPoint = catchAsync(async (req, res, next) => {
  const result = await routePickupPointService.insetRoutePickupPoint(req?.body);

  res.status(status.OK).json({
    success: true,
    message: "RoutePickupPoint inserted successfully",
    data: result,
  });
});
const getAllRoutePickupPoint = catchAsync(async (req, res, next) => {
  const result = await routePickupPointService.getAllRoutePickupPoint();

  res.status(status.OK).json({
    success: true,
    message: "RoutePickupPoint fetched successfully",
    data: result,
  });
});

// get pickup point by route id
const getPickupPointByRouteId = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await routePickupPointService.getPickupPointByRouteId(id);

  res.status(status.OK).json({
    success: true,
    message: "RoutePickupPoint fetched successfully",
    data: result,
  });
});

const deleteRoutePickupPoint = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await routePickupPointService.deleteRoutePickupPointById(id);

  res.status(status.OK).json({
    success: true,
    message: "RoutePickupPoint deleted successfully",
    data: result,
  });
});

const routePickupPointController = {
  insertRoutePickupPoint,
  getAllRoutePickupPoint,
  deleteRoutePickupPoint,
  getPickupPointByRouteId,
};

export default routePickupPointController;
