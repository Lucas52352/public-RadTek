import { deleteCartController } from "../../controllers/cartControllers/deleteCartController";
import { Request, Response } from "express"

export const deleteCartProduct = async (req: Request, res: Response) => {
    const  product  = req.body;
    const userId = req.user.id
    try {
        const productDeleted = await deleteCartController(userId, product);
        res.status(200).send(productDeleted);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}