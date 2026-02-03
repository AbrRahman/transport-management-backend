import express from "express";
import pickupPointController from "./pickupPoint.controller";

const router = express.Router();
router.post("/", pickupPointController.createPickupPoint);
router.get("/", pickupPointController.getAllPickupPoints);
router.get("/:id", pickupPointController.getSinglePickupPoint);
router.put("/:id", pickupPointController.updatePickupPoint);
router.delete("/:id", pickupPointController.deletePickupPoint);
const pickupPointRouter = router;
export default pickupPointRouter;
