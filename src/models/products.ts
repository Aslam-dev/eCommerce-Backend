import { Document, model, Schema } from 'mongoose';

export interface IProduct extends Document {
  SKU: string;
  quantity: number;
  productName: string;
  images: string[];
  productDescription: string;
}

const productSchema: Schema = new Schema({
  SKU: String,
  quantity: Number,
  productName: String,
  images: [String],
  productDescription: String,
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
