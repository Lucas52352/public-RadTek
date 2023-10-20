"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const products_1 = __importDefault(require("../../models/products"));
const getAllProducts = async () => {
    try {
        const allProducts = await products_1.default.find({}).exec();
        if (allProducts.length === 0) {
            return { message: "No products found." };
        }
        return allProducts;
    }
    catch (error) {
        // Propagate the error for handling in the calling function
        throw error;
    }
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=getAllProducts.js.map