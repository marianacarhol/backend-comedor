"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRouter = (0, express_1.Router)();
/*productRouter.get('/', (req:Request, res:Response) => {
res.send('Get a list of products')
});*/
productRouter.get('/', productController_1.getAllProducts);
/*productRouter.get('/:id', (req:Request, res:Response) => {
res.send(`Get the product ${req.params.id}`)
});*/
productRouter.get('/:id', productController_1.getProductById);
/*productRouter.post('/', (req:Request, res:Response) => {
res.send(`Create a new product with ID: ${req.body.id}`)
});*/
productRouter.post('/', productController_1.createProduct);
/*productRouter.patch('/:id', (req:Request, res:Response) => {
res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`)
});*/
productRouter.patch('/:id', productController_1.modifyProduct);
/*productRouter.delete('/', (req:Request, res:Response) => {
res.send(`Deleting the product ${req.body.id}`)
});*/
productRouter.delete('/', productController_1.deleteProduct);
exports.default = productRouter;
