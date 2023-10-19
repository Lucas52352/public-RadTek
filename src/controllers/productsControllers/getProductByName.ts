import Product from "../../models/products";

export const getProductByName = async (name: string) => {
    try {
        const oneProduct = await Product.find({ name: {
            $regex: name
        }}).exec();

        console.log(oneProduct, 'controller');

        if (!oneProduct) {
            throw new Error("Product not found");
        }

        return oneProduct;
    } catch (error) {
        throw error;
    }
};
