import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: [{
         idProduct: {type: mongoose.Schema.Types.ObjectId, ref: 'products'} ,
         cartQuantity: {type: Number}
    }],
    admin: { type: Boolean, default: false }
},
    {
        timestamps: true
    })

export const UserModel = mongoose.model('users', userSchema);