"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productTypeController_1 = require("../controllers/productTypeController");
const productRouter = (0, express_1.Router)();
productRouter.get('/product-ids/:productTypeId', productTypeController_1.getProductIdsByProductType);
productRouter.get('/', productTypeController_1.getAllProductTypes);
productRouter.get('/:id', productTypeController_1.getProductTypeById);
productRouter.post('/', productTypeController_1.createProductType);
productRouter.patch('/:id', productTypeController_1.modifyProductType);
productRouter.delete('/:id', productTypeController_1.deleteProductType);
exports.default = productRouter;
