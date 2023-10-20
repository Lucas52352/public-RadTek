"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProductHandler = void 0;
const createProduct_1 = require("../../controllers/productsControllers/createProduct");
const postProductHandler = async (req, res) => {
    let product = req.body;
    console.log(product);
    try {
        const pro = await (0, createProduct_1.createProduct)(product);
        console.log(pro);
        res.status(200).json(pro);
    }
    catch (error) {
        res.json({ message: error.message });
    }
};
exports.postProductHandler = postProductHandler;
//# sourceMappingURL=postProductHandler.js.map