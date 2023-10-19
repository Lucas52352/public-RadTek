import { getAllProducts } from "../../controllers/productsControllers/getAllProducts";
import { Request, Response } from "express";

export const getAllProductsHandler = async (req: Request, res: Response) => {
    try {
        const result = await getAllProducts();

        if (Array.isArray(result)) {
            // If result is an array, it means products were found
            res.status(200).json(result);
        } else if (result.message) {
            // If result has a message property, it means no products were found
            res.status(404).json({ message: result.message });
        } else {
            // Handle unexpected result here (optional)
            res.status(500).json({ error: "Unexpected result from getAllProducts" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
