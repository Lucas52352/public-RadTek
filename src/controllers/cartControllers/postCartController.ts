import { getProductById } from "controllers/productsControllers/getProductById"
import { current } from "handlers/users/currentHandler"
import Product, { IProduct } from "models/products"
import { UserModel } from "models/user"

export const postCartController = async (product: IProduct) => {

    const productToCart = getProductById(product._id)


    console.log(productToCart)

    return cartProduct
}