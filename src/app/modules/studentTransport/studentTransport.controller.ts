import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import studentTransportService from "./studentTransport.service";

const studentTransportAssignment = catchAsync(async (req, res, next) => {
  const result = await studentTransportService.studentTransportAssignment(
    req?.body,
  );

  res.status(status.OK).json({
    success: true,
    message: "Student transport assignment  successfully",
    data: result,
  });
});
const getAllStudentTransportAssign = catchAsync(async (req, res, next) => {
  const result = await studentTransportService.getAllStudentTransportAssign();

  res.status(status.OK).json({
    success: true,
    message: "Student Transport Assign fetched successfully",
    data: result,
  });
});
const getAllStudentTransportFee = catchAsync(async (req, res, next) => {
  const result = await studentTransportService.getAllStudentTransportFee();

  res.status(status.OK).json({
    success: true,
    message: "Student Transport Assign fetched successfully",
    data: result,
  });
});

const studentTransportController = {
  studentTransportAssignment,
  getAllStudentTransportAssign,
  getAllStudentTransportFee,
};

export default studentTransportController;
