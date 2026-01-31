export type TTransportAssignment = {
  studentId: string;
  routeId: string;
  pickupPointId: string;
  month: number;
  isActive?: boolean;
};

export type TTransportFeeAssignment = {
  studentId: string;
  routeId: string;
  month: string;
  amount: number;
  status?: string;
};
