import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import transportFeeService from "./transportFee.service";

const createTransportFee = catchAsync(async (req, res, next) => {
  const result = await transportFeeService.createTransportFee(req?.body);

  res.status(status.OK).json({
    success: true,
    message: "TransportFee created successfully",
    data: result,
  });
});
const getAllTransportFee = catchAsync(async (req, res, next) => {
  const result = await transportFeeService.getAllTransportFee();

  res.status(status.OK).json({
    success: true,
    message: "TransportFee fetched successfully",
    data: result,
  });
});
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
  updateTransportFee,
  deleteTransportFee,
};

export default transportFeeController;
