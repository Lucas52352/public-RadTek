import mongoose from "mongoose";
import { getProductById } from "../../controllers/productsControllers/getProductById";
import { Request, Response } from "express"

export const getOneProductHandler = async (req: Request, res: Response) => {
    const { _id } = req.params;

    try {
        const product = await getProductById(_id)

        res.status(200).send(product)
        
    } catch (error) {
        res.status(400).send(error)
    }
}