import Product from "../../models/products";
import mongoose from "mongoose";

// Function to update a product by its ID
export const updateProduct = async (id: mongoose.Types.ObjectId , updateData: []) => {
    try {
        // Use findOneAndUpdate to find and update the document by its ID
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: id },
            updateData,
            { new: true } // Return the updated document
        ).exec();

        if (!updatedProduct) {
            throw new Error("Product not found");
        }

        return updatedProduct;
    } catch (error) {
        throw error;
    }
};
