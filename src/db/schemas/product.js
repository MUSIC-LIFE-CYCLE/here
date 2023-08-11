import { Schema } from "mongoose";

const productSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "상품 설명을 기입해주세요.",
    },
  },
  {
    timestamps: true,
  }
);

export { productSchema };
