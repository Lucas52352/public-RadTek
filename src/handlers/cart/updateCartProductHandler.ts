import { updateCartController } from "../../controllers/cartControllers/updateCartController";
import { Request, Response } from "express";

export const updateCartProductHandler = async (req: Request, res: Response) => {
    const product = req.body
    const userId = req.user.id

    try {
        const productUpdated = await updateCartController(userId, product);
        res.status(200).send(productUpdated);
    } catch (error) {
        res.status(400).send(error)
    }

}