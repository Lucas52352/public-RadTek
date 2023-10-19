import { Response, Request } from "express";
import { createProduct } from "../../controllers/productsControllers/createProduct";

export const postProductHandler = async (req: Request, res: Response) => {
    let product = req.body;

    console.log(product)
    try {
        const pro = await createProduct(product)
        console.log(pro)
        res.status(200).json(pro)
    } catch (error) {
        res.json({ message: error.message })
    }
}