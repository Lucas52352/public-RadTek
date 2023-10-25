import Product, { IProduct } from "../../models/products"
import { UserModel } from "../../models/user"

export const deleteCartController = async (userId: string, product: IProduct) => {
    
    const productDeleted = await  Product.findOne({ _id: product._id })

    const updated= await  UserModel.findOneAndUpdate({
        _id: userId
    },
        {
            $pull: { cart: productDeleted._id }
        },
        {new: true}
    ).populate('cart')
    return updated
}