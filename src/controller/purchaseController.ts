import { Request, Response } from "express";
import { prisma } from "../db";
import { Decimal } from "@prisma/client/runtime/library";

export const createPurchase = async (req: Request, res: Response) => {
  try {
    const newPurchase = await prisma.purchase.create({
      data: req.body,
      include: {
        Supplier: {
          select: {
            Supplier_name: true,
          },
        },
      },
    });
    res.status(201).json({ data: newPurchase });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al crear la compra");
    res.status(500).json({ error: err.message });
  }
};

export const updatePurchase = async (req: Request, res: Response) => {
  try {
    const updatedPurchase = await prisma.purchase.update({
      where: {
        Purchase_id: Number(req.params.purchaseId),
      },
      data: req.body,
      include: {
        Supplier: {
          select: {
            Supplier_name: true,
          },
        },
      },
    });
    res.status(200).json({ data: updatedPurchase });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al actualizar la compra");
    res.status(500).json({ error: err.message });
  }
};

export const closePurchase = async (req: Request, res: Response) => {
  try {
    const purchaseId: number = Number(req.params.purchaseId);
    const Purchase_totalAmount = req.body.total;

    if (isNaN(Purchase_totalAmount)) {
      throw new Error("El valor de totalAmount debe ser un número válido.");
    }

    const updatedPurchase = await prisma.purchase.update({
      where: {
        Purchase_id: purchaseId,
      },
      data: {
        Purchase_close: true,
        Purchase_totalAmount,
      },
    });

    res.status(200).json({ data: updatedPurchase });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al cerrar la compra");
    res.status(500).json({ error: err.message });
  }
};

export const deletePurchase = async (req: Request, res: Response) => {
  try {
    const purchaseId = Number(req.params.purchaseId);
    await prisma.purchase.delete({
      where: {
        Purchase_id: purchaseId,
      },
    });
    res.status(200).json({ data: "Compra eliminada" });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al eliminar la compra");
    res.status(500).json({ error: err.message });
  }
};
export const getPurchases = async (req: Request, res: Response) => {
  try {
    const purchases = await prisma.purchase.findMany({
      orderBy: {
        Purchase_id: "desc",
      },
      include: {
        Supplier: {
          select: {
            Supplier_name: true,
          },
        },
        Product: {
          select: {
            Product_total: true,
          },
        },
      },
    });
    purchases.forEach((purchase) => {
      purchase.Purchase_totalAmount = purchase.Product.reduce(
        (total, product) => total.plus(product.Product_total || new Decimal(0)),
        new Decimal(0)
      );
    });

    res.status(200).json({ data: purchases });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al obtender la lista de compras");
    res.status(500).json({ error: err.message });
  }
};

export const getPurchaseById = async (req: Request, res: Response) => {
  const purchaseId = Number(req.params.purchaseId);
  try {
    const purchase = await prisma.purchase.findUnique({
      where: {
        Purchase_id: purchaseId,
      },

      include: {
        Supplier: {
          select: {
            Supplier_name: true,
            Supplier_nit: true,
            Supplier_contactInfo: true,
            Supplier_email: true,
            Supplier_phoneNumber: true,
          },
        },
        User: {
          select: {
            User_name: true,
            User_surname: true,
          },
        },
        Product: {
          select: {
            Product_id: true,
            Product_ref: true,
            Product_name: true,
            Product_description: true,
            Product_cost: true,
            Product_qty: true,
          },
        },
      },
    });

    res.status(200).json({ data: purchase });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al obtender el detalle de la compra");
    res.status(500).json({ error: err.message });
  }
};
