"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByName = void 0;
const products_1 = __importDefault(require("../../models/products"));
const getProductByName = async (name) => {
    try {
        const oneProduct = await products_1.default.find({ name: {
                $regex: name
            } }).exec();
        console.log(oneProduct, 'controller');
        if (!oneProduct) {
            throw new Error("Product not found");
        }
        return oneProduct;
    }
    catch (error) {
        throw error;
    }
};
exports.getProductByName = getProductByName;
//# sourceMappingURL=getProductByName.js.map