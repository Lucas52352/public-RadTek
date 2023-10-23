import { Request, Response } from "express"

export const current = async(req: Request, res: Response)=>{
    res.send('current user info')
}