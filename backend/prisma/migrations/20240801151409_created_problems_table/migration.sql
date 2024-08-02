/*
  Warnings:

  - You are about to drop the column `function` on the `Problems` table. All the data in the column will be lost.
  - Added the required column `code` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problems" DROP COLUMN "function",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[];
