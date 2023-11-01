import { UserModel } from "../../models/user";
import mongoose from "mongoose";

export const deleteUser = async (id: string) => {
  const _id = new mongoose.Types.ObjectId(id);
  const user = await UserModel.findOne({ _id });
  user && await UserModel.deleteOne(_id);
  return 'User ' + user + 'was deleted';
}