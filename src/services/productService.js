import { productModel } from "../db";
import { v4 as uuidv4 } from "uuid";

class productService {
  static async addProduct({ name, price, description }) {
    // 여기에 코드 작성
    try {
      const checkProduct = await productModel.findByName(name);
      if (checkProduct) {
        return { errorMessage: "이미 등록된 상품입니다." };
      }
      const createNewProduct = await productModel.create({
        id: uuidv4(),
        name: name,
        price: price,
        description: description,
      });
      createNewProduct.errorMessage = null;

      return createNewProduct;
    } catch (error) {
      return { errorMessage: "상품 등록에 실패하였습니다." };
    }
  }
  static async patchProduct(productId, patchData) {
    try {
      const patchProduct = await productModel.patchProduct(
        productId,
        patchData
      );
      return patchProduct;
    } catch (error) {
      return { errorMessage: "제품 부분 업데이트에 실패하였습니다." };
    }
  }
  static async getProducts() {
    try {
      const product = await productModel.getProducts({});
      return product;
    } catch (error) {
      return { errorMessage: "제품 조회에 실패하였습니다." };
    }
  }
  static async deleteProduct(productId) {
    try {
      const product = await productModel.deleteProduct(productId);
      return product;
    } catch (error) {
      return { errorMessage: "제품 삭제에 실패하였습니다." };
    }
  }
}

export { productService };
