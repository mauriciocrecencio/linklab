import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rate: { type: Number, required: true },
  image: { type: String, required: false },
});

export const ProductModel = mongoose.model('Product', productSchema);