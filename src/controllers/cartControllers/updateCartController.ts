import { UserModel } from "../../models/user";
import Product, { IProduct } from "../../models/products";

export const updateCartController = async (userId: string, product: IProduct) => {

    const productUpdated = await Product.findOne({ _id: product._id })

    const updated = await UserModel.findOneAndUpdate({
        _id: userId
    },
        {
            $set: { cart: productUpdated.cartQuantity }
        },
        {
            new: true
        }
    ).populate('cart')

    return updated
}