import { Request, Response } from "express";
import { prisma } from "../db";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await prisma.product.create({
      data: req.body,
      select: {
        Product_id: true,
        Product_ref: true,
        Product_name: true,
        Product_description: true,
        Product_cost: true,
        Product_qty: true,
      },
    });
    res.status(201).json({ data: newProduct });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al crear el producto en la orden de compra");
    res.status(500).json({ error: err.message });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const newProduct = await prisma.product.update({
      where: {
        Product_id: data.Product_id,
      },
      data,
      select: {
        Product_id: true,
        Product_ref: true,
        Product_name: true,
        Product_description: true,
        Product_cost: true,
        Product_qty: true,
      },
    });
    res.status(201).json({ data: newProduct });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al crear el producto en la orden de compra");
    res.status(500).json({ error: err.message });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const productId = Number(req.params.productId);

  try {
    await prisma.product.delete({
      where: {
        Product_id: productId,
      },
    });
    res.status(200).json({ data: "Producto eliminado" });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al eliminar el producto");
    res.status(500).json({ error: err.message });
  }
};
