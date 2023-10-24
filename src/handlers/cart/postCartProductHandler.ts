import { Request, Response } from "express"

export const postCartProduct= async(req: Request, res: Response)=>{
    try {
        // const product = await postCartNewProduct(req.user.id)
        // res.status(200).send(product)
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
}