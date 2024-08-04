/*
  Warnings:

  - You are about to drop the column `testCaseAns` on the `Problems` table. All the data in the column will be lost.
  - You are about to drop the column `testCases` on the `Problems` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Problems" DROP COLUMN "testCaseAns",
DROP COLUMN "testCases";
