"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getOneProductHandler_1 = require("../handlers/products/getOneProductHandler");
const getAllProductsHandler_1 = require("../handlers/products/getAllProductsHandler");
const postProductHandler_1 = require("../handlers/products/postProductHandler");
const deleteProductHandler_1 = require("../handlers/products/deleteProductHandler");
const updateProductHandler_1 = require("../handlers/products/updateProductHandler");
const getProductByNameHandler_1 = require("../handlers/products/getProductByNameHandler");
const productRouter = (0, express_1.Router)();
productRouter.get('/products', getAllProductsHandler_1.getAllProductsHandler);
productRouter.get('/product/:_id', getOneProductHandler_1.getOneProductHandler);
productRouter.get('/product', getProductByNameHandler_1.getProductByNameHandler);
productRouter.post('/product', postProductHandler_1.postProductHandler);
productRouter.put('/product/:_id', updateProductHandler_1.updateProductHandler);
productRouter.delete('/product/:id', deleteProductHandler_1.deleteProductHanlder);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map