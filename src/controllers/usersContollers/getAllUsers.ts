import { UserModel } from "../../models/user"

export const allUsers= async()=>{
    const users= await UserModel.find();
    if(users.length === 0) throw new Error('Empty');
    return users;
}