import { Router, Request, Response } from 'express'; 
import productRoutes from './productRoutes'; 
import productTypeRoutes from './productTypeRoutes';

const apiRouter:Router = Router(); 

apiRouter.use('/product', productRoutes); 

apiRouter.use('/product-type', productTypeRoutes);

apiRouter.get('/', (req:Request, res: Response) => { 
res.send('Hello World!') 
})

//apiRouter.get('/products', (req:Request, res: Response) => { 
//res.send('Hello World!') 
//)

export default apiRouter;
