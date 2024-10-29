/*
  Warnings:

  - Added the required column `Product_qty` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "Product_qty" INTEGER NOT NULL;
