import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controller/userController";

const router = Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.put("/users", updateUser);
router.delete("/users/:userId", deleteUser);

export default router;
