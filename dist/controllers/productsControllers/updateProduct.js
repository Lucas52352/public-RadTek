"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const products_1 = __importDefault(require("../../models/products"));
// Function to update a product by its ID
const updateProduct = async (id, updateData) => {
    try {
        // Use findOneAndUpdate to find and update the document by its ID
        const updatedProduct = await products_1.default.findOneAndUpdate({ _id: id }, updateData, { new: true } // Return the updated document
        ).exec();
        if (!updatedProduct) {
            throw new Error("Product not found");
        }
        return updatedProduct;
    }
    catch (error) {
        throw error;
    }
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProduct.js.map