import express from "express";
import vehicleRouter from "../modules/vehicle/vehicle.routes";

const router = express.Router();

const moduleRouter = [
  {
    path: "/vehicle",
    route: vehicleRouter,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
