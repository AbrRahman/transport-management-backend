-- CreateTable
CREATE TABLE "transport_fee" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "monthlyFee" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transport_fee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transport_fee_routeId_key" ON "transport_fee"("routeId");

-- AddForeignKey
ALTER TABLE "transport_fee" ADD CONSTRAINT "transport_fee_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
