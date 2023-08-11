import { productModel } from "../db";
import { v4 as uuidv4 } from "uuid";

class productService {
  static async addProduct({ name, price, description }) {
    // 여기에 코드 작성
    try {
      const checkProduct = await productModel.findByName(name);
      console.log(checkProduct);
      if (checkProduct) {
        return { errorMessage: "이미 등록된 상품입니다." };
      }
      const createNewProduct = await productModel.create({
        id: uuidv4(),
        name: name,
        price: price,
        description: description,
      });
      console.log(createNewProduct);
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
      console.error(error);
      return { errorMessage: "제품 부분 업데이트에 실패하였습니다.1" };
    }
  }
}

export { productService };
