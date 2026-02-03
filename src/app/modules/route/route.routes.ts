import express from "express";
import routeController from "./route.controller";
const router = express.Router();

router.post("/", routeController.createRoute);
router.get("/", routeController.getAllRoutes);
router.get("/stop-watch", routeController.getRoutesWithStops);
router.put("/:id", routeController.updateRoute);
router.delete("/:id", routeController.deleteRoute);
router.get("/unassign-fee", routeController.findRouteByUnassignedTransferFee);

const routeRouter = router;
export default routeRouter;
