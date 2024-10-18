import { prisma } from "../src/db";
import { customers } from "./data/customers";
import { devolutions } from "./data/devolutions";
import { products } from "./data/products";
import { purchases } from "./data/purchases";
import { saleDetails } from "./data/saleDetails";
import { sales } from "./data/sales";
import { suppliers } from "./data/suppliers";
import { users } from "./data/users";
import { warranties } from "./data/warranties";

const newSaleDatail = saleDetails.map((item) => ({
  ...item,
  SaleDetail_total: item.SaleDetail_unitPrice * item.SaleDetail_quantity,
}));

const newUser = users.map(({User_id, ...item})=> item)
const newCustomers = customers.map(({Customer_id, ...item})=> item)
const newDevolutions = devolutions.map(({Dev_id, ...item})=> item)
const newProducts = products.map(({Product_id, ...item})=> item)
const newPurchases = purchases.map(({Purchase_id, ...item})=> item)
const newSaleDetails = newSaleDatail.map(({SaleDetail_id, ...item})=> item)
const newSales = sales.map(({Sale_id, ...item})=> item)
const newSuppliers = suppliers.map(({Supplier_id, ...item})=> item)
const newWarranties = warranties.map(({Warranty_id, ...item})=> item)

async function main() {
  try {
    await prisma.user.createMany({
      data: newUser,
    });
    await prisma.customer.createMany({
      data: newCustomers,
    });
    await prisma.supplier.createMany({
      data: newSuppliers,
    });
    await prisma.purchase.createMany({
      data: newPurchases,
    });
    await prisma.product.createMany({
      data: newProducts,
    });
    await prisma.sale.createMany({
      data: newSales,
    });
    await prisma.saleDetails.createMany({
      data: newSaleDetails,
    });
    await prisma.devolution.createMany({
      data: newDevolutions,
    });
    await prisma.warranty.createMany({
      data: newWarranties,
    });
  } catch (error) {
    console.log(error);
  }
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });