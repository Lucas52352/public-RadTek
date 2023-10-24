import { loginController } from "../../controllers/usersContollers/login";
import { Request, Response } from "express"

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) throw new Error('Missing data');

        const user = await loginController(email, password);
        res.status(200).send({ accessToken: user });
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}