import { deleteProduct } from "../../controllers/productsControllers/deleteProduct";
import { Request, Response } from "express"

export const deleteProductHanlder = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const product = await deleteProduct(id)

        res.status(200).send(product)
        
    } catch (error) {
        res.status(400).send(error)
    }
}