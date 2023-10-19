import Product from "../../models/products";
import mongoose from "mongoose";

export const getProductById = async (id: string) => {
    try {
        const oneProduct = await Product.findOne({ _id: id }).exec();
        
        console.log(oneProduct);

        if (!oneProduct) {
            throw new Error("Product not found");
        }

        return oneProduct;
    } catch (error) {
        throw error;
    }
};
