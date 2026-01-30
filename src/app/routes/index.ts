import express from "express";
import vehicleRouter from "../modules/vehicle/vehicle.routes";
import pickupPointRouter from "../modules/pickupPoint/pickupPoint.routes";
import routeRouter from "../modules/route/route.routes";

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
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
