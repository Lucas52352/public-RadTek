"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const products_1 = __importDefault(require("../../models/products"));
const deleteProduct = async (id) => {
    try {
        const oneProduct = await products_1.default.findOne({ id: id }).exec();
        console.log(oneProduct);
        if (!oneProduct) {
            throw new Error("Product not found");
        }
        const productToDelete = await products_1.default.deleteOne({ id: id }).exec();
        return `${oneProduct.name} was deleted`;
    }
    catch (error) {
        throw error;
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=deleteProduct.js.map