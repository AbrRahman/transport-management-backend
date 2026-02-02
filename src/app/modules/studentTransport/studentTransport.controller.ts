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

// delete student transport assignment
const deleteStudentTransportAssign = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await studentTransportService.deleteStudentTransportAssign(id);

  res.status(status.OK).json({
    success: true,
    message: "Deleted successfully",
    data: result,
  });
});

// update student transport assignment
const toggleUpdateStudentTransportBaseOnActive = catchAsync(
  async (req, res, next) => {
    const id = req?.params?.id as string;
    const result =
      await studentTransportService.toggleUpdateStudentTransportBaseOnActive(
        id,
      );

    res.status(status.OK).json({
      success: true,
      message: "Update successfully",
      data: result,
    });
  },
);

const studentTransportController = {
  studentTransportAssignment,
  getAllStudentTransportAssign,
  getAllStudentTransportFee,
  deleteStudentTransportAssign,
  toggleUpdateStudentTransportBaseOnActive,
};

export default studentTransportController;
