import express from "express";
import routeController from "./route.controller";
const router = express.Router();

router.post("/", routeController.createRoute);
router.get("/", routeController.getAllRoutes);
router.get("/stop-watch", routeController.getRoutesWithStops);
router.get("/unassign-fee", routeController.findRouteByUnassignedTransferFee);
router.get("/:id", routeController.getSIngleRoute);
router.put("/:id", routeController.updateRoute);
router.delete("/:id", routeController.deleteRoute);

const routeRouter = router;
export default routeRouter;
