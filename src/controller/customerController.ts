import { Request, Response } from "express";
import { prisma } from "../db";
import { Customer } from "@prisma/client";

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const newCustomer = await prisma.customer.create({
      data: req.body,
    });
    res.status(201).json({ data: newCustomer });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al crear el cliente");
    res.status(500).json({ error: err.message });
  }
};
export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const customer: Customer = req.body;
    const updatedCustomer = await prisma.customer.update({
      where: {
        Customer_id: customer.Customer_id,
      },
      data: customer,
    });
    res.status(200).json({ data: updatedCustomer });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al actualizar el cliente");
    res.status(500).json({ error: err.message });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const customerId = Number(req.params.customerId);
    await prisma.customer.delete({
      where: {
       Customer_id : customerId,
      },
    });
    res.status(200).json({ data: "Cliente eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al eliminar el cliente");
    res.status(500).json({ error: err.message });
  }
};

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        Customer_surname: "asc",
      },
    });
    res.status(200).json({ data: customers });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al obtender la lista de clientes");
    res.status(500).json({ error: err.message });
  }
};
