import { UserModel } from "../../models/user";
import bcrypt from 'bcrypt';

export const registerContoller = async (username: string, email: string, password: string) => {
    const userAviliable = await UserModel.findOne({ email });

    if (userAviliable) throw new Error('User already register');

    const hashedPassword = await bcrypt.hash(password, 10);


    const createUser = new UserModel({
        username,
        email,
        password: hashedPassword
    });
    await createUser.save();


    if (!createUser) throw new Error('Register failed');

    return 'newUser registered';
}