import { updateCartController } from "../../controllers/cartControllers/updateCartController";
import { Request, Response } from "express";

export const updateCartProductHandler = async (req: Request, res: Response) => {
    const { productId, cartQuantity } = req.body
    const userId = req.user.id

    console.log(productId, cartQuantity)

    try {
        const productUpdated = await updateCartController(userId, productId, cartQuantity);

        console.log(productUpdated)

        res.status(200).send(productUpdated);
    } catch (error) {
        res.status(400).send(error)
    }

}