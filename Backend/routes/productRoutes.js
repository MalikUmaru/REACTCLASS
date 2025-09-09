import express from "express";
import { getProductById, getProducts, createProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:name", getProductById);


export default router;