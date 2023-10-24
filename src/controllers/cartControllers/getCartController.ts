import { UserModel } from "../../models/user"

export const getCartController = async (userId: string) => {
    const currentCartUser = await (await UserModel.findOne({ _id: userId })).populate('cart')
    
    console.log(currentCartUser,'aaaaaa')

    if (!currentCartUser) return { message: 'No user found' }

    return currentCartUser
}