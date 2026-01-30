import express from "express";
import routeController from "./route.controller";
const router = express.Router();

router.post("/", routeController.createRoute);
router.get("/", routeController.getAllRoutes);
router.put("/:id", routeController.updateRoute);
router.delete("/:id", routeController.deleteRoute);

const routeRouter = router;
export default routeRouter;
