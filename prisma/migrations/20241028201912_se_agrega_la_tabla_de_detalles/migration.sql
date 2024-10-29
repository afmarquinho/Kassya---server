-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "Product_price" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "PurchaseDetail" (
    "PurchDet_id" SERIAL NOT NULL,
    "PurchDet_purchaseId" INTEGER NOT NULL,
    "PurchDet_productId" INTEGER NOT NULL,
    "PurchDet_qtyOrdered" INTEGER NOT NULL,
    "PurchDet_qtyReceived" INTEGER NOT NULL,
    "PurchDet_qtyDiff" INTEGER NOT NULL,
    "PurchDet_locationStatus" TEXT NOT NULL,
    "PurchDet_qtyDispatched" INTEGER NOT NULL,
    "PurchDet_qtyAvailable" INTEGER NOT NULL,

    CONSTRAINT "PurchaseDetail_pkey" PRIMARY KEY ("PurchDet_id")
);

-- AddForeignKey
ALTER TABLE "PurchaseDetail" ADD CONSTRAINT "PurchaseDetail_PurchDet_purchaseId_fkey" FOREIGN KEY ("PurchDet_purchaseId") REFERENCES "Purchase"("Purchase_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDetail" ADD CONSTRAINT "PurchaseDetail_PurchDet_productId_fkey" FOREIGN KEY ("PurchDet_productId") REFERENCES "Product"("Product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
