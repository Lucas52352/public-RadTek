import { Request, Response } from "express"

export const current = async(req: Request, res: Response)=>{

    res.status(200).send(req.user)
}