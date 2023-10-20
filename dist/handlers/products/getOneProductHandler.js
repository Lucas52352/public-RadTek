"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneProductHandler = void 0;
const getProductById_1 = require("../../controllers/productsControllers/getProductById");
const getOneProductHandler = async (req, res) => {
    const { _id } = req.params;
    try {
        const product = await (0, getProductById_1.getProductById)(_id);
        res.status(200).send(product);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.getOneProductHandler = getOneProductHandler;
//# sourceMappingURL=getOneProductHandler.js.map