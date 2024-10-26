import { Router } from "express";
import {
  getPurchases,
  createPurchase,
  deletePurchase,
  updatePurchase,
  getPurchaseById,
  closePurchase,
} from "../controller/purchaseController";

const router = Router();

router.get("/", getPurchases);
router.post("/", createPurchase);
router.put("/:purchaseId", updatePurchase);
router.delete("/:purchaseId", deletePurchase);
router.get("/:purchaseId", getPurchaseById);
router.put("/:purchaseId", closePurchase);

export default router;
