import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  modifyProduct
} from '../controllers/productController';

const productRouter:Router = Router(); 

/*productRouter.get('/', (req:Request, res:Response) => { 
res.send('Get a list of products') 
});*/

productRouter.get('/', getAllProducts);

/*productRouter.get('/:id', (req:Request, res:Response) => { 
res.send(`Get the product ${req.params.id}`) 
});*/

productRouter.get('/:id', getProductById);

/*productRouter.post('/', (req:Request, res:Response) => { 
res.send(`Create a new product with ID: ${req.body.id}`) 
});*/

productRouter.post('/', createProduct);

/*productRouter.patch('/:id', (req:Request, res:Response) => { 
res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`) 
});*/

productRouter.patch('/:id', modifyProduct);

/*productRouter.delete('/', (req:Request, res:Response) => { 
res.send(`Deleting the product ${req.body.id}`) 
});*/ 

productRouter.delete('/', deleteProduct);

export default productRouter;