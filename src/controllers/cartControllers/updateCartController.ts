import { UserModel } from "../../models/user";
import Product, { IProduct } from "../../models/products";

export const updateCartController = async (userId: string, productId: string, cartQuantity: number) => {

    try {
        if (!productId || !userId || !cartQuantity) throw new Error("Missing data")

        const product = await Product.findOne({ _id: productId });

        if (!product) {
            throw new Error("Product not found");
        }

        const updated = await UserModel.findOneAndUpdate(
            { _id: userId, 'cart._id': productId },
            {
                $set: { "cart.$.cartQuantity": cartQuantity }
            },
            {
                new: true,
            }
        ).populate('cart');
        console.log(updated, 'updated controller')

        return updated;

    } catch (error) {
        return error
    }

}
