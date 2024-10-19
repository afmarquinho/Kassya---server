import { Router } from "express";
import {
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "../controller/supplierController";

const router = Router();
router.get("/", getSuppliers);
router.post("/", createSupplier);
router.put("/", updateSupplier);
router.delete("/:supplierId", deleteSupplier);

export default router;
