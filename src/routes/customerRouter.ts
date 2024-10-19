import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../controller/customerController";

const router = Router();

router.get("/", getCustomers);
router.post("/", createCustomer);
router.put("/", updateCustomer);
router.delete("/:customerId", deleteCustomer);

export default router
