import Product, { IProduct } from "../../models/products";
import { UserModel } from "../../models/user"

export const postCartController = async (userId: string, productBody: IProduct) => {

    console.log(userId)

    const oneProduct = await Product.findOne({ _id: productBody._id }).exec();

    const oneUser = await UserModel.findOneAndUpdate({
        _id: userId
    },
        {
            $push: { cart: oneProduct._id }
        }
    ).populate('cart')

    return oneUser
}