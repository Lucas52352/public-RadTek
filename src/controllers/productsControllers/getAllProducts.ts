import Product from "../../models/products";

export const getAllProducts = async () => {
    try {
        const allProducts = await Product.find({}).exec();

        if (allProducts.length === 0) {
            return { message: "No products found." };
        }

        return allProducts;
    } catch (error) {
        // Propagate the error for handling in the calling function
        throw error;
    }
}
