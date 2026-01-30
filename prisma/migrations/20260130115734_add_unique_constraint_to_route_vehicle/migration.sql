/*
  Warnings:

  - A unique constraint covering the columns `[routeId,vehicleId]` on the table `RouteVehicle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RouteVehicle_routeId_vehicleId_key" ON "RouteVehicle"("routeId", "vehicleId");
