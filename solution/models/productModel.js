import { productSchema } from "../schemas/product";
import { model } from "mongoose";

const Product = model("product", productSchema);
// "product" 모델 생성
class productModel {
  // 새로운 상품 생성 메서드
  static create(newProduct) {
    return Product.create(newProduct);
  }

  // 상품 이름으로 조회 메서드
  static findByName(name) {
    return Product.findOne({ name });
  }

  // 상품 정보 부분 업데이트 메서드
  static patchProduct(productId, patchData) {
    return Product.findByIdAndUpdate(productId, patchData);
  }


  // 모든 상품 조회 메서드
  static getProducts() {
    return Product.find({});
  }

  // 상품 삭제 메서드
  static deleteProduct(productId) {
    return Product.deleteOne({ _id: productId });
  }
}

export { productModel };
