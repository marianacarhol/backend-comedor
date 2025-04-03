import express, { Express, Request, Response } from "express";
import apiRouter from './src/routes';
import connectionDB from './connection/connection';
import path from 'path';

import { Product } from './src/models/product';
import { Person } from './src/models/person';
import { Donation } from "./src/models/donation";
import { ProductType } from './src/models/productType'

const morgan = require('morgan');
const app: Express = express();
const port = 3000;

app.use(express.static('dist/front')); //changes to static files

app.use(morgan('dev'));
app.use(express.json());
app.use(apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'index.html'));
  });

app.get('/products-json', async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products); // Send products as JSON
    } catch (error: any) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  });

  app.get('/productTypes-json', async (req, res) => {
    try {
        const productTypes = await ProductType.findAll();
        res.json(productTypes);
    } catch (error: any) {
        res.status(500)
    }
  })

  app.get('/donations-json', async (req, res) => {
    try {
        const donations = await Donation.findAll();
        res.json(donations); 
    } catch (error: any) {
        res.status(500)
    }
  })

  app.get('/people-json', async (req, res) => {
    try {
        const people = await Person.findAll();
        res.json(people); 
    } catch (error: any) {
        res.status(500)
    }
  })
  
connectionDB();

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});