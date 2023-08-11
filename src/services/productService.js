import { productModel } from "../db";
import { v4 as uuidv4 } from "uuid";

class productService {
  static async addProduct({ name, price, description }) {
    // 여기에 코드 작성
    try {
      // 상품 등록 메서드
      const checkProduct = await productModel.findByName(name);
      if (checkProduct) {
        return { errorMessage: "이미 등록된 제품입니다." };
      }

      // 새로운 상품 생성
      const createNewProduct = await productModel.create({
        id: uuidv4(),
        name: name,
        price: price,
        description: description,
      });

      // 에러 메시지 초기화 후 생성된 상품 반환
      createNewProduct.errorMessage = null;
      return createNewProduct;
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 등록에 실패하였습니다." };
    }
  }

  // 상품 정보 업데이트 메서드
  static async patchProduct(productId, patchData) {
    try {
      // 상품 정보 부분 업데이트
      const patchProduct = await productModel.patchProduct(
        productId,
        patchData
      );
      return patchProduct;
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 부분 업데이트에 실패하였습니다." };
    }
  }

  // 상품 목록 조회 메서드
  static async getProducts() {
    try {
      const product = await productModel.getProducts({});
      return product;
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 조회에 실패하였습니다." };
    }
  }

  // 상품 삭제 메서드
  static async deleteProduct(productId) {
    try {
      const product = await productModel.deleteProduct(productId);
      return product;
    } catch (error) {
      // 오류 발생 시 실패 메시지 반환
      return { errorMessage: "제품 삭제에 실패하였습니다." };
    }
  }
}

export { productService };
