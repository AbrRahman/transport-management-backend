import express from "express";
import studentTransportController from "./studentTransport.controller";
const router = express.Router();

router.post(
  "/student-assign",
  studentTransportController.studentTransportAssignment,
);
router.get(
  "/student-assign",
  studentTransportController.getAllStudentTransportAssign,
);
router.get(
  "/transport-fee",
  studentTransportController.getAllStudentTransportAssign,
);

const studentTransport = router;
export default studentTransport;
