"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByNameHandler = void 0;
const getProductByName_1 = require("../../controllers/productsControllers/getProductByName");
const getProductByNameHandler = async (req, res) => {
    let { name } = req.query;
    console.log(name);
    try {
        const product = await (0, getProductByName_1.getProductByName)(name);
        res.status(200).send(product);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.getProductByNameHandler = getProductByNameHandler;
//# sourceMappingURL=getProductByNameHandler.js.map