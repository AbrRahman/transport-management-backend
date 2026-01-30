import catchAsync from "../../utils/catchAsync";
import status from "http-status";
import vehicleService from "./vehicle.service";

const createVehicle = catchAsync(async (req, res, next) => {
  const result = await vehicleService.createVehicle(req.body);

  res.status(status.OK).json({
    success: true,
    message: "Vehicle created successfully",
    data: result,
  });
});

const vehicleCOntroller = {
  createVehicle,
};
export default vehicleCOntroller;
