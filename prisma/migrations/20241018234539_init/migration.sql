/*
  Warnings:

  - Added the required column `Customer_userId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Supplier_userId` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "Customer_userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "Supplier_userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_Customer_userId_fkey" FOREIGN KEY ("Customer_userId") REFERENCES "User"("User_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_Supplier_userId_fkey" FOREIGN KEY ("Supplier_userId") REFERENCES "User"("User_id") ON DELETE RESTRICT ON UPDATE CASCADE;
