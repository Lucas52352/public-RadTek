import { Request, Response } from "express"

export const getUserProducts= async(req: Request, res: Response)=>{
    try {
        // const products= getProducts(req.user.id);
        // res.status(200).send(products);
    } catch (error) {
        res.status(400).send({ message: error.message});
    }
}