import { Request, Response } from "express";
import { getProductByName } from "../../controllers/productsControllers/getProductByName";

export const getProductByNameHandler = async (req: Request, res: Response) => {
    let { name } = req.query as {name: string};

    console.log(name)
    
    try {
        const product = await getProductByName(name);

        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};
