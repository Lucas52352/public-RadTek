import { getCurrentUser } from "../../controllers/usersContollers/currentUser";
import { Request, Response } from "express"

export const current = async (req: Request, res: Response) => {
    const userId = req.user.id

    try {
        const products = await getCurrentUser(userId);
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}