/*
  Warnings:

  - You are about to drop the column `isAvailable` on the `book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "isAvailable",
ADD COLUMN     "inStock" BOOLEAN NOT NULL DEFAULT true;
