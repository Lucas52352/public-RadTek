"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = void 0;
const products_1 = __importDefault(require("../../models/products"));
const getProductById = async (id) => {
    try {
        const oneProduct = await products_1.default.findOne({ _id: id }).exec();
        console.log(oneProduct);
        if (!oneProduct) {
            throw new Error("Product not found");
        }
        return oneProduct;
    }
    catch (error) {
        throw error;
    }
};
exports.getProductById = getProductById;
//# sourceMappingURL=getProductById.js.map