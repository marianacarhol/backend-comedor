import { Router } from 'express';
import {
  createProductType,
  deleteProductType,
  getAllProductTypes,
  getProductTypeById,
  modifyProductType,
  getProductIdsByProductType
} from '../controllers/productTypeController';

const productRouter:Router = Router(); 

productRouter.get('/product-ids/:productTypeId', getProductIdsByProductType)

/*productRouter.get('/', (req:Request, res:Response) => { 
res.send('Get a list of products') 
});*/

productRouter.get('/', getAllProductTypes);

/*productRouter.get('/:id', (req:Request, res:Response) => { 
res.send(`Get the product ${req.params.id}`) 
});*/

productRouter.get('/:id', getProductTypeById);

/*productRouter.post('/', (req:Request, res:Response) => { 
res.send(`Create a new product with ID: ${req.body.id}`) 
});*/

productRouter.post('/', createProductType);

/*productRouter.patch('/:id', (req:Request, res:Response) => { 
res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`) 
});*/

productRouter.patch('/:id', modifyProductType);

/*productRouter.delete('/', (req:Request, res:Response) => { 
res.send(`Deleting the product ${req.body.id}`) 
});*/ 

productRouter.delete('/', deleteProductType);

export default productRouter;