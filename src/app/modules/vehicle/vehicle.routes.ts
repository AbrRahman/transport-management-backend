import express from "express";
import vehicleCOntroller from "./vehicle.controller";
const router = express.Router();

router.post("/", vehicleCOntroller.createVehicle);

router.get("/", (req, res) => {
  res.send("Vehicle Module Works!");
});

const vehicleRouter = router;
export default vehicleRouter;
