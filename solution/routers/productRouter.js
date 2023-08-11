import { Router } from "express";
import { productService } from "../services/productService";

const productRouter = Router();

// 상품 등록 API
productRouter.post("/product", async (req, res, next) => {
  try {
    const productData = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    // 상품 등록 서비스 호출
    const newProduct = await productService.addProduct(productData);
    if (newProduct.errorMessage) {
      throw new Error(newProduct.errorMessage);
    }

    // 상품 등록 성공 시 201 Created 상태코드와 함께 JSON 응답
    res.status(201).json(newProduct);
  } catch (error) {
    // 에러 발생 시 에러 핸들러로 전달
    next(error);
  }
});

// 상품 정보 업데이트 API
productRouter.patch("/product/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const patchData = req.body;

    // 상품 정보 업데이트 서비스 호출
    const patchedProduct = await productService.patchProduct(
      productId,
      patchData
    );

    // 업데이트 실패 시 에러 처리
    if (patchedProduct.errorMessage) {
      throw new Error(patchedProduct.errorMessage);
    }

    // 업데이트 성공 시 200 OK 상태코드와 함께 JSON 응답
    res.status(200).json(patchedProduct);
  } catch (error) {
    // 에러 발생 시 에러 핸들러로 전달
    next(error);
  }
});

// 상품 목록 조회 API
productRouter.get("/product", async (req, res, next) => {
  try {
    const products = await productService.getProducts();

    // 조회 성공 시 200 OK 상태코드와 함께 JSON 응답
    res.status(200).json(products);
  } catch (error) {

    // 에러 발생 시 에러 핸들러로 전달
    next(error);
  }
});

// 상품 삭제 API
productRouter.delete("/product/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await productService.deleteProduct(productId);
    // 삭제 성공 시 200 OK 상태코드와 함께 JSON 응답
    res.status(200).json(deletedProduct);
  } catch (error) {
    // 에러 발생 시 에러 핸들러로 전달
    next(error);
  }
});

export { productRouter };
