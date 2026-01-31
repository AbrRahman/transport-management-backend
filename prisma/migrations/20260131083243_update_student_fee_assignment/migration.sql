/*
  Warnings:

  - A unique constraint covering the columns `[studentId,routeId,month]` on the table `student_fee_assignment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `month` to the `student_fee_assignment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "student_fee_assignment_studentId_routeId_key";

-- AlterTable
ALTER TABLE "student_fee_assignment" ADD COLUMN     "month" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "student_fee_assignment_studentId_routeId_month_key" ON "student_fee_assignment"("studentId", "routeId", "month");
