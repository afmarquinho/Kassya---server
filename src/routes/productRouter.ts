import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controller/productController";

const router = Router();

router.post("/", createProduct);
router.delete("/:productId", deleteProduct);
router.put("/", updateProduct);

export default router;
