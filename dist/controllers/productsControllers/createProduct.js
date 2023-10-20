"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const products_1 = __importDefault(require("../../models/products"));
const createProduct = async (product) => {
    const newProduct = new products_1.default({
        id: product.id,
        category: product.category,
        price: product.price,
        name: product.name,
        image: product.image,
        color: product.color,
        description: product.description,
        brand: product.brand,
        stock: product.stock
    });
    console.log(newProduct, 'product created');
    if (newProduct.id || newProduct.name)
        throw new Error(`This product already exists:  ${newProduct.name}`);
    await newProduct.save();
    return [newProduct, 'Product created successfully'];
};
exports.createProduct = createProduct;
//# sourceMappingURL=createProduct.js.map