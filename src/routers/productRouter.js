import { Router } from "express";
import { productService } from "../services/productService";

const productRouter = Router();

productRouter.post("/product", async function (req, res, next) {
  try {
    const product_data = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };
    // 여기에 코드 작성
    // 유저 db에 추가 후 반환받은 user 객체 (변수 이름 변경 가능)
    const newProduct = await productService.addProduct(product_data);
    if (newProduct.errorMessage) {
      throw new Error(newProduct.errorMessage);
    }

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});
productRouter.patch("/product/:id", async function (req, res, next) {
  try {
    const productId = req.params.id;
    const patchData = req.body;

    const patchProduct = await productService.patchProduct(
      productId,
      patchData
    );

    if (patchData.errorMessage) {
      throw new Error(patchData.errorMessage);
    }

    res.status(200).json(patchProduct);
  } catch (error) {
    next(error);
  }
});

export { productRouter };
