"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsHandler = void 0;
const getAllProducts_1 = require("../../controllers/productsControllers/getAllProducts");
const getAllProductsHandler = async (req, res) => {
    try {
        const result = await (0, getAllProducts_1.getAllProducts)();
        if (Array.isArray(result)) {
            // If result is an array, it means products were found
            res.status(200).json(result);
        }
        else if (result.message) {
            // If result has a message property, it means no products were found
            res.status(404).json({ message: result.message });
        }
        else {
            // Handle unexpected result here (optional)
            res.status(500).json({ error: "Unexpected result from getAllProducts" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllProductsHandler = getAllProductsHandler;
//# sourceMappingURL=getAllProductsHandler.js.map