import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  modifyProduct
} from '../controllers/productController';

const productRouter:Router = Router(); 

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductById);

productRouter.post('/', createProduct);

productRouter.patch('/:id', modifyProduct);

productRouter.delete('/:id', (req, res) => {
  console.log("DELETE route reached with ID:", req.params.id);
  res.status(200).json({ message: `Delete route working! ID: ${req.params.id}` });
});


export default productRouter;