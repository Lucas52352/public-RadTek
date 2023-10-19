import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    id: {type: Number, required: true},
    username: {type: String, required: true},
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true, select: false},
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    admin: {type: Boolean, default: false}
})

export const UserModel= mongoose.model('users', userSchema);