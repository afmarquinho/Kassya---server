import { prisma } from "../src/db";
import { customers } from "./data/customers";
import { devolutions } from "./data/devolutions";
//import { products } from "./data/products";
import { purchases } from "./data/purchases";
import { saleDetails } from "./data/saleDetails";
import { sales } from "./data/sales";
import { suppliers } from "./data/suppliers";
import { users } from "./data/users";
import { warranties } from "./data/warranties";

async function main() {
  try {
    await prisma.user.createMany({
      data: users,
    });
    await prisma.customer.createMany({
      data: customers,
    });
    await prisma.supplier.createMany({
      data: suppliers,
    });
    await prisma.purchase.createMany({
      data: purchases,
    });
    // await prisma.product.createMany({
    //   data: products,
    // });
    await prisma.sale.createMany({
      data: sales,
    });
    await prisma.saleDetails.createMany({
      data: saleDetails,
    });
    await prisma.devolution.createMany({
      data: devolutions,
    });
    await prisma.warranty.createMany({
      data: warranties,
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
