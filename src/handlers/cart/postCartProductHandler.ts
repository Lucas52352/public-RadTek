import { postCartController } from '../../controllers/cartControllers/postCartController'
import { Request, Response } from "express"

export const postCartProduct = async (req: Request, res: Response) => {

    const productBody = req.body
    const userId = req.user.id

    console.log(userId)

    try {
        const product = await postCartController(userId, productBody)
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}