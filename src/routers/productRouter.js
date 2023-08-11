import { Router } from "express";
import { productService } from "../services/productService";

const productRouter = Router();

productRouter.post("/product", async (req, res, next) => {
  try {
    const productData = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    const newProduct = await productService.addProduct(productData);
    if (newProduct.errorMessage) {
      throw new Error(newProduct.errorMessage);
    }

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

productRouter.patch("/product/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const patchData = req.body;

    const patchedProduct = await productService.patchProduct(
      productId,
      patchData
    );

    if (patchedProduct.errorMessage) {
      throw new Error(patchedProduct.errorMessage);
    }

    res.status(200).json(patchedProduct);
  } catch (error) {
    next(error);
  }
});

productRouter.get("/product", async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

productRouter.delete("/product/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await productService.deleteProduct(productId);
    res.status(200).json(deletedProduct);
  } catch (error) {
    next(error);
  }
});

export { productRouter };
