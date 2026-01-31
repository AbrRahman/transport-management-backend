import express from "express";
import vehicleRouter from "../modules/vehicle/vehicle.routes";
import pickupPointRouter from "../modules/pickupPoint/pickupPoint.routes";
import routeRouter from "../modules/route/route.routes";
import transportFeeRouter from "../modules/transportFee/transportFee.routes";
import routeVehicleRouter from "../modules/routeVehicle/routeVehicle.routes";
import rotePickupPointRouter from "../modules/routePickupPoint/routePickupPoint.routes";
import studentTransport from "../modules/studentTransport/studentTransport.routes";

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
  {
    path: "/route-vehicle",
    route: routeVehicleRouter,
  },
  {
    path: "/rote-pickup-point",
    route: rotePickupPointRouter,
  },
  {
    path: "/student-transport",
    route: studentTransport,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
