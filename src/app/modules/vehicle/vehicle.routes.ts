import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Vehicle Module Works!");
});

const vehicleRouter = router;
export default vehicleRouter;
