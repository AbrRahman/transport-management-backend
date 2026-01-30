import express from "express";
import routePickupPointController from "./routePickupPoint.controller";

const router = express.Router();

router.post("/", routePickupPointController.insertRoutePickupPoint);
router.get("/", routePickupPointController.getAllRoutePickupPoint);
router.delete("/:id", routePickupPointController.deleteRoutePickupPoint);

const rotePickupPointRouter = router;
export default rotePickupPointRouter;
