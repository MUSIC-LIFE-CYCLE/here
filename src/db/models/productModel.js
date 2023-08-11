import { productSchema } from "../schemas/product";
import { model } from "mongoose";

const Product = model("product", productSchema);

class productModel {
  static async create(newProduct) {
    try {
      return await Product.create(newProduct);
    } catch (error) {
      return { errorMessage: "제품 등록에 실패했습니다." };
    }
  }

  static async findByName(name) {
    try {
      return await Product.findOne({ name });
    } catch (error) {
      return null;
    }
  }

  static async patchProduct(productId, patchData) {
    try {
      return await Product.findByIdAndUpdate(productId, patchData);
    } catch (error) {
      return { errorMessage: "제품 부분 업데이트에 실패하였습니다." };
    }
  }

  static async getProducts() {
    try {
      return await Product.find({});
    } catch (error) {
      return { errorMessage: "제품 조회에 실패하였습니다." };
    }
  }

  static async deleteProduct(productId) {
    try {
      return await Product.deleteOne({ _id: productId });
    } catch (error) {
      return { errorMessage: "제품 삭제에 실패하였습니다." };
    }
  }
}

export { productModel };
