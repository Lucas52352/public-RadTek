import Product from "../../models/products";

export const deleteProduct = async (id: string) => {
    try {
        const oneProduct = await Product.findOne({ id: id }).exec();
        
        console.log(oneProduct);
        
        if (!oneProduct) {
            throw new Error("Product not found");
        }
        const productToDelete = await Product.deleteOne({ id: id }).exec();

        return `${oneProduct.name} was deleted`;
    } catch (error) {
        throw error;
    }
};
