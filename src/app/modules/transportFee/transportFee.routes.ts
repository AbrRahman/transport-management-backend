import express from "express";
import transportFeeController from "./transportFee.controller";
const router = express.Router();

router.post("/", transportFeeController.createTransportFee);
router.get("/", transportFeeController.getAllTransportFee);
router.put("/:id", transportFeeController.updateTransportFee);
router.delete("/:id", transportFeeController.deleteTransportFee);

const transportFeeRouter = router;
export default transportFeeRouter;
