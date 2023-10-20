"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductHandler = void 0;
const getProductById_1 = require("../../controllers/productsControllers/getProductById");
const updateProduct_1 = require("../../controllers/productsControllers/updateProduct");
const updateProductHandler = async (req, res) => {
    try {
        const { _id } = req.params;
        const product = req.body;
        // Assuming getProductById returns a promise that resolves to the product
        const existingProduct = await (0, getProductById_1.getProductById)(_id);
        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        // Now you can update the existing product with the new data
        const updatedProduct = await (0, updateProduct_1.updateProduct)(existingProduct._id, product);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateProductHandler = updateProductHandler;
//# sourceMappingURL=updateProductHandler.js.map