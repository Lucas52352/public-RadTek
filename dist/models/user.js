"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    cart: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Product' },
    admin: { type: Boolean, default: false }
});
exports.UserModel = mongoose_1.default.model('users', userSchema);
//# sourceMappingURL=user.js.map