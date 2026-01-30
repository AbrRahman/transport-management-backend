/*
  Warnings:

  - You are about to drop the `RouteVehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RouteVehicle" DROP CONSTRAINT "RouteVehicle_routeId_fkey";

-- DropForeignKey
ALTER TABLE "RouteVehicle" DROP CONSTRAINT "RouteVehicle_vehicleId_fkey";

-- DropTable
DROP TABLE "RouteVehicle";

-- CreateTable
CREATE TABLE "route_vehicle" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "route_vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "route_vehicle_routeId_key" ON "route_vehicle"("routeId");

-- CreateIndex
CREATE UNIQUE INDEX "route_vehicle_vehicleId_key" ON "route_vehicle"("vehicleId");

-- AddForeignKey
ALTER TABLE "route_vehicle" ADD CONSTRAINT "route_vehicle_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "route_vehicle" ADD CONSTRAINT "route_vehicle_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
