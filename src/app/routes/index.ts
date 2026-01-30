import express from "express";
import vehicleRouter from "../modules/vehicle/vehicle.routes";
import pickupPointRouter from "../modules/pickupPoint/pickupPoint.routes";

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
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
