import { Request, Response } from "express"

export const deleteCartProduct= async(req: Request, res: Response)=>{
    const {id}= req.params;
    try {
        //const productDeleted= deleteProd(req.user.id);
        // res.status(200).send(productDeleted);
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
}