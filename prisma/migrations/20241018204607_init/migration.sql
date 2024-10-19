/*
  Warnings:

  - You are about to drop the column `Customer_active` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "Customer_active";

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "Supplier_active" BOOLEAN NOT NULL DEFAULT true;
