import express from "express";
import vehicleRouter from "../modules/vehicle/vehicle.routes";
import pickupPointRouter from "../modules/pickupPoint/pickupPoint.routes";
import routeRouter from "../modules/route/route.routes";
import transportFeeRouter from "../modules/transportFee/transportFee.routes";

const router = express.Router();

const moduleRouter = [
  {
    path: "/vehicle",
    route: vehicleRouter,
  },
  {
    path: "/pickup-point",
    route: pickupPointRouter,
  },
  {
    path: "/route",
    route: routeRouter,
  },
  {
    path: "/transport-fee",
    route: transportFeeRouter,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
