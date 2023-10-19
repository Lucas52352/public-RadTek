import { getProductById } from "../../controllers/productsControllers/getProductById";
import { updateProduct } from "../../controllers/productsControllers/updateProduct";
import { Request, Response } from "express";

export const updateProductHandler = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const product = req.body;

        // Assuming getProductById returns a promise that resolves to the product
        const existingProduct = await getProductById(_id);

        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Now you can update the existing product with the new data
        const updatedProduct = await updateProduct(existingProduct._id, product);

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
