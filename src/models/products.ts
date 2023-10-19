import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    id: number;
    category: string;
    name: string;
    price: number;
    image: string;
    color: string;
    description: string;
    stock: number;
    brand: string;
}

const productSchema = new Schema<IProduct>({
    id: { type: Number, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    color: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    brand: { type: String, required: true}
});

const Product = mongoose.model<IProduct>('products', productSchema);

export default Product;
