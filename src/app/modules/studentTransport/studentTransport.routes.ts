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
router.put(
  "/student-assign/:id",
  studentTransportController.toggleUpdateStudentTransportBaseOnActive,
);
router.delete(
  "/student-assign/:id",
  studentTransportController.deleteStudentTransportAssign,
);
router.get(
  "/transport-fee",
  studentTransportController.getAllStudentTransportFee,
);

const studentTransport = router;
export default studentTransport;
