/*
  Warnings:

  - Added the required column `sampleTestCase` to the `Problems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sampleTestCaseAns` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problems" ADD COLUMN     "sampleTestCase" TEXT NOT NULL,
ADD COLUMN     "sampleTestCaseAns" TEXT NOT NULL;
