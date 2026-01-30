-- DropForeignKey
ALTER TABLE "transport_fee" DROP CONSTRAINT "transport_fee_routeId_fkey";

-- AddForeignKey
ALTER TABLE "transport_fee" ADD CONSTRAINT "transport_fee_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
