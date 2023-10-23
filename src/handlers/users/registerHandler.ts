import { registerContoller } from "../../controllers/usersContollers/register";
import { Request, Response } from "express"


export const register= async(req: Request, res: Response)=>{
    const {username, email, password}= req.body;
    try {
        if(!username || !email || !password) throw Error('Missing data');
        
        const newUser= await registerContoller(username, email, password)
        res.status(200).send(newUser);

    } catch (error) {
        res.status(400).send({message: error.message})
    }
    
}