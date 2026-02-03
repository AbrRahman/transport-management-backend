-- DropForeignKey
ALTER TABLE "student_fee_assignment" DROP CONSTRAINT "student_fee_assignment_routeId_fkey";

-- DropForeignKey
ALTER TABLE "student_fee_assignment" DROP CONSTRAINT "student_fee_assignment_studentId_fkey";

-- DropForeignKey
ALTER TABLE "student_transport_assignment" DROP CONSTRAINT "student_transport_assignment_pickupPointId_fkey";

-- DropForeignKey
ALTER TABLE "student_transport_assignment" DROP CONSTRAINT "student_transport_assignment_routeId_fkey";

-- DropForeignKey
ALTER TABLE "student_transport_assignment" DROP CONSTRAINT "student_transport_assignment_studentId_fkey";

-- AddForeignKey
ALTER TABLE "student_transport_assignment" ADD CONSTRAINT "student_transport_assignment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_transport_assignment" ADD CONSTRAINT "student_transport_assignment_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_transport_assignment" ADD CONSTRAINT "student_transport_assignment_pickupPointId_fkey" FOREIGN KEY ("pickupPointId") REFERENCES "pickup_points"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_fee_assignment" ADD CONSTRAINT "student_fee_assignment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_fee_assignment" ADD CONSTRAINT "student_fee_assignment_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
