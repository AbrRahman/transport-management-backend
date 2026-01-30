/*
  Warnings:

  - You are about to drop the `RoutePickupPoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoutePickupPoint" DROP CONSTRAINT "RoutePickupPoint_pickupPointId_fkey";

-- DropForeignKey
ALTER TABLE "RoutePickupPoint" DROP CONSTRAINT "RoutePickupPoint_routeId_fkey";

-- DropTable
DROP TABLE "RoutePickupPoint";

-- CreateTable
CREATE TABLE "route_pickup_point" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "pickupPointId" TEXT NOT NULL,
    "stopOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "route_pickup_point_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "route_pickup_point_routeId_pickupPointId_key" ON "route_pickup_point"("routeId", "pickupPointId");

-- CreateIndex
CREATE UNIQUE INDEX "route_pickup_point_routeId_stopOrder_key" ON "route_pickup_point"("routeId", "stopOrder");

-- AddForeignKey
ALTER TABLE "route_pickup_point" ADD CONSTRAINT "route_pickup_point_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "route_pickup_point" ADD CONSTRAINT "route_pickup_point_pickupPointId_fkey" FOREIGN KEY ("pickupPointId") REFERENCES "pickup_points"("id") ON DELETE CASCADE ON UPDATE CASCADE;
