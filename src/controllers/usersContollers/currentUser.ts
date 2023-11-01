import { UserModel } from "../../models/user"

export const getCurrentUser = async (userId: string) => {
    const currentUser = await (await UserModel.findOne({ _id: userId })).populate('cart')

    if (!currentUser) return { message: 'No user found' }

    return currentUser
}