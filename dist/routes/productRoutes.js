"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.getAllProducts);
productRouter.get('/:id', productController_1.getProductById);
productRouter.post('/', productController_1.createProduct);
productRouter.patch('/:id', productController_1.modifyProduct);
productRouter.delete('/:id', (req, res) => {
    console.log("DELETE route reached with ID:", req.params.id);
    res.status(200).json({ message: `Delete route working! ID: ${req.params.id}` });
});
exports.default = productRouter;
