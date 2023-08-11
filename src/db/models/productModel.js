import { productSchema } from "../schemas/product";
import { model } from "mongoose";

const Product = model("product", productSchema);

class productModel {
  static async create(newProduct) {
    try {
      const createNewProduct = await Product.create(newProduct);
      return createNewProduct;
    } catch (error) {
      console.error(error);
      return { errorMessage: "상품 등록에 실패했습니다." };
    }
  }

  static async findByName(name) {
    try {
      const product = await Product.findOne({ name });
      return product;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async patchProduct(productId, patchData) {
    console.log(productId, patchData);
    try {
      const patchProduct = await Product.findByIdAndUpdate(
        productId,
        patchData
      );
      return patchProduct;
    } catch (error) {
      console.error(error);
      return { errorMessage: "제품 부분 업데이트에 실패하였습니다.2" };
    }
  }
}

export { productModel };
