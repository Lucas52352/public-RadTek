import { UserModel } from "../../models/user"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const loginController= async(email: string, password: string)=>{
    const userFound= await UserModel.findOne({email})
    if(!userFound) throw new Error('Email is not valid');
    
    if(userFound && (await bcrypt.compare(password, userFound.password))){
        const accesToken= jwt.sign({
            user:{
                username: userFound.username,
                email: userFound.email,
                cart: userFound.cart,
                admin: userFound.admin,
                id: userFound._id
            },
        }, process.env.TOKEN_SECRET,
        {expiresIn: "1m"}
        )
        return accesToken
    }else{
        throw new Error('Password is not valid');
    }

}