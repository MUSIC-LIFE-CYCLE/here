import { productModel } from "../db";
import { v4 as uuidv4 } from "uuid";

class productService {
  static async addProduct({ name, price, description }) {
    try {
      const existingProduct = await productModel.findByName(name);
      if (existingProduct) {
        return { errorMessage: "이미 등록된 상품입니다." };
      }

      const newProduct = await productModel.create({
        id: uuidv4(),
        name,
        price,
        description,
      });

      newProduct.errorMessage = null;
      return newProduct;
    } catch (error) {
      return { errorMessage: "상품 등록에 실패하였습니다." };
    }
  }

  static async patchProduct(productId, patchData) {
    try {
      const patchedProduct = await productModel.patchProduct(
        productId,
        patchData
      );
      return patchedProduct;
    } catch (error) {
      console.error(error);
      return { errorMessage: "제품 부분 업데이트에 실패하였습니다." };
    }
  }

  static async getProducts() {
    try {
      const products = await productModel.getProducts({});
      return products;
    } catch (error) {
      return { errorMessage: "제품 조회에 실패하였습니다." };
    }
  }

  static async deleteProduct(productId) {
    try {
      const deletedProduct = await productModel.deleteProduct(productId);
      return deletedProduct;
    } catch (error) {
      console.error(error);
      return { errorMessage: "제품 삭제에 실패하였습니다." };
    }
  }
}

export { productService };
