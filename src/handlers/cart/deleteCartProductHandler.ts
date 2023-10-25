// import { deleteCartController } from "../../controllers/cartControllers/deleteCartController";
// import { Request, Response } from "express"

// export const deleteCartProduct = async (req: Request, res: Response) => {
//     const { productId } = req.params;
//     const userId = req.user.id
//     try {
//         const productDeleted = await deleteCartController(userId, productId);
//         res.status(200).send(productDeleted);
//     } catch (error) {
//         res.status(400).send({ message: error.message })
//     }
// }