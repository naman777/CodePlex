/*
  Warnings:

  - You are about to drop the column `code` on the `Problems` table. All the data in the column will be lost.
  - Added the required column `testCaseAns` to the `Problems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testCases` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problems" DROP COLUMN "code",
ADD COLUMN     "testCaseAns" TEXT NOT NULL,
ADD COLUMN     "testCases" TEXT NOT NULL;
