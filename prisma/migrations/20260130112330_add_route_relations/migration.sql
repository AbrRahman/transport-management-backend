-- CreateTable
CREATE TABLE "RoutePickupPoint" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "pickupPointId" TEXT NOT NULL,
    "stopOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoutePickupPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RouteVehicle" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "RouteVehicle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoutePickupPoint" ADD CONSTRAINT "RoutePickupPoint_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutePickupPoint" ADD CONSTRAINT "RoutePickupPoint_pickupPointId_fkey" FOREIGN KEY ("pickupPointId") REFERENCES "pickup_points"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteVehicle" ADD CONSTRAINT "RouteVehicle_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteVehicle" ADD CONSTRAINT "RouteVehicle_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
