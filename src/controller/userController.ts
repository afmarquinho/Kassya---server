import { Request, Response } from "express";
import { prisma } from "../db";
import { User } from "@prisma/client";

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json({ data: newUser });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al crear el usuario");
    res.status(500).json({ error: err.message });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const updatedUser = await prisma.user.update({
      where: {
        User_id: user.User_id,
      },
      data: user,
    });
    res.status(200).json({ data: updatedUser });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al actualizar usuario");
    res.status(500).json({ error: err.message });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdAsNumber = Number(userId);
     await prisma.user.delete({
      where: {
        User_id: userIdAsNumber,
      },
    });
    res.status(200).json({ data: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al eliminar el usuario");
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      orderBy:{
        User_surname:"asc"
      }
    });
    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al obtender usuarios");
    res.status(500).json({ error: err.message });
  }
};
