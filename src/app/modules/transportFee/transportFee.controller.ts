import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import transportFeeService from "./transportFee.service";

// a route set transport fee
const createTransportFee = catchAsync(async (req, res, next) => {
  const result = await transportFeeService.createTransportFee(req?.body);

  res.status(status.OK).json({
    success: true,
    message: "TransportFee created successfully",
    data: result,
  });
});

// get all route transport fee
const getAllTransportFee = catchAsync(async (req, res, next) => {
  const result = await transportFeeService.getAllTransportFee();

  res.status(status.OK).json({
    success: true,
    message: "TransportFee fetched successfully",
    data: result,
  });
});

// get single route transport fee
const getSingleTransportFee = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await transportFeeService.getSingleTransportFee(id);
  res.status(status.OK).json({
    success: true,
    message: "get single successfully",
    data: result,
  });
});
// update route transport fee
const updateTransportFee = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await transportFeeService.updateTransportFeeById(
    id,
    req?.body,
  );

  res.status(status.OK).json({
    success: true,
    message: "TransportFee updated successfully",
    data: result,
  });
});

// delete route transport fee
const deleteTransportFee = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await transportFeeService.deleteTransportFeeById(id);

  res.status(status.OK).json({
    success: true,
    message: "TransportFee deleted successfully",
    data: result,
  });
});

const transportFeeController = {
  createTransportFee,
  getAllTransportFee,
  getSingleTransportFee,
  updateTransportFee,
  deleteTransportFee,
};

export default transportFeeController;
