import { productSchema } from "../schemas/product";
import { model } from "mongoose";

const Product = model("product", productSchema);
// "product" 모델 생성
class productModel {
  // 새로운 상품 생성 메서드
  static async create(newProduct) {
    try {
      return await Product.create(newProduct);
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 등록에 실패했습니다." };
    }
  }
  // 상품 이름으로 조회 메서드
  static async findByName(name) {
    try {
      return await Product.findOne({ name });
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 조회에 실패했습니다." };
    }
  }

  // 상품 정보 부분 업데이트 메서드
  static async patchProduct(productId, patchData) {
    try {
      return await Product.findByIdAndUpdate(productId, patchData);
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 부분 업데이트에 실패하였습니다." };
    }
  }

  // 모든 상품 조회 메서드
  static async getProducts() {
    try {
      return await Product.find({});
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 조회에 실패하였습니다." };
    }
  }

  // 상품 삭제 메서드
  static async deleteProduct(productId) {
    try {
      return await Product.deleteOne({ _id: productId });
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 삭제에 실패하였습니다." };
    }
  }
}

export { productModel };
