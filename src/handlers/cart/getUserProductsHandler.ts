import { getCartController } from "../../controllers/cartControllers/getCartController";
import { Request, Response } from "express"

export const getUserProducts = async (req: Request, res: Response) => {

    const userId = req.user.id

    try {
        const products = await getCartController(userId);
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}