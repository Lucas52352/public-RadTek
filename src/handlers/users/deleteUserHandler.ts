import { deleteUser } from "../../controllers/usersContollers/deleteUser";
import { Request, Response } from "express"

export const deleteTheUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await deleteUser(id);
        res.status(200).send({ message: user })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}