import { Sequelize } from "sequelize-typescript";
import { Product } from "../src/models/product";
import { ProductType } from "../src/models/productType";

const connection = new Sequelize({
    database: 'sisweb_db',
    dialect: 'mysql',
    username: 'sisweb_user',
    password: '123456',
    host: 'localhost',
    port: 3306,
    //storage: ':memory:',
    models: [
        Product, ProductType
    ]
});

async function connectionDB(){
    try{
    await connection.sync();
    }catch(e){
    console.log(e);
    }
} 

export default connectionDB;