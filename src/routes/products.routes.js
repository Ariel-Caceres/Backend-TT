import express from "express";

import { productsController } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", productsController.getAll);
router.get("/:id", productsController.getOne);
router.post("/", productsController.createProduct);
router.delete("/:id", productsController.deleteProduct);
router.put("/:id", productsController.updateProduct);

export default router;
