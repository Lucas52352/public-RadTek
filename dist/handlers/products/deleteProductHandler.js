"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductHanlder = void 0;
const deleteProduct_1 = require("../../controllers/productsControllers/deleteProduct");
const deleteProductHanlder = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await (0, deleteProduct_1.deleteProduct)(id);
        res.status(200).send(product);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.deleteProductHanlder = deleteProductHanlder;
//# sourceMappingURL=deleteProductHandler.js.map