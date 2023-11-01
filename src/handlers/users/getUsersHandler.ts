import { Request, Response } from "express";
import { allUsers } from "../../controllers/usersContollers/getAllUsers";
export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const response = await allUsers();

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
