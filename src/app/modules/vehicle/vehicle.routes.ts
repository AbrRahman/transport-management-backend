import express from "express";
import vehicleCOntroller from "./vehicle.controller";
const router = express.Router();

router.post("/", vehicleCOntroller.createVehicle);
router.get("/", vehicleCOntroller.getAllVehicles);
router.put("/:id", vehicleCOntroller.updateVehicle);
router.delete("/:id", vehicleCOntroller.deleteVehicle);

const vehicleRouter = router;
export default vehicleRouter;
