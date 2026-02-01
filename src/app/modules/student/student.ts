import express from "express";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../../lib/prisma";
const router = express.Router();

// get all student data
router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const result = await prisma.student.findMany();
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: result,
    });
  }),
);

const studentRouter = router;
export default studentRouter;
