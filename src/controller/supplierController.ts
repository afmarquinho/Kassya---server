import { Request, Response } from "express";
import { prisma } from "../db";
import { Supplier } from "@prisma/client";

export const createSupplier = async (req: Request, res: Response) => {
  try {
    const newSupplier = await prisma.supplier.create({
      data: req.body,
    });
    res.status(201).json({ data: newSupplier });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al crear el proveedor");
    res.status(500).json({ error: err.message });
  }
};

export const updateSupplier = async (req: Request, res: Response) => {
  try {
    const supplier: Supplier = req.body;
    const updatedSupplier = await prisma.supplier.update({
      where: {
        Supplier_id: supplier.Supplier_id,
      },
      data: supplier,
    });
    res.status(200).json({ data: updatedSupplier });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al actualizar proveedor");
    res.status(500).json({ error: err.message });
  }
};
export const deleteSupplier = async (req: Request, res: Response) => {
  try {
    const supplierId = Number(req.params.supplierId);
    await prisma.supplier.delete({
      where: {
        Supplier_id: supplierId,
      },
    });
    res.status(200).json({ data: "Proveedor eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al eliminar el proveedor");
    res.status(500).json({ error: err.message });
  }
};

export const getSuppliers = async (req: Request, res: Response) => {
  try {
    const suppliers = await prisma.supplier.findMany({
      orderBy: {
        Supplier_name: "asc",
      },
    });
    res.status(200).json({ data: suppliers });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al obtender los proveedores");
    res.status(500).json({ error: err.message });
  }
};
