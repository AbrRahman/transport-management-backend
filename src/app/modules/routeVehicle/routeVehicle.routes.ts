import express from "express";
import routeVehicleController from "./routeVehicle.controller";

const router = express.Router();

router.post("/", routeVehicleController.insertRouteVehicle);
router.get("/", routeVehicleController.getAllRouteVehicle);
router.delete("/:id", routeVehicleController.deleteRouteVehicle);

const routeVehicleRouter = router;
export default routeVehicleRouter;
