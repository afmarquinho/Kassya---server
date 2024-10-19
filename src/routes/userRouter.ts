import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controller/userController";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.put("/", updateUser);
router.delete("/:userId", deleteUser);

export default router;
