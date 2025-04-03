import {Table, Model, Column, HasMany} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import { Product } from "../models/product";

interface ProductTypeAttributes{
  id: number;
  nombre: string;
}

interface ProductTypeCreationAttributes extends Optional<ProductTypeAttributes, 'id'>{}

@Table ({
  tableName: "ProductTypes"
})
export class ProductType extends Model<ProductTypeAttributes, ProductTypeCreationAttributes>{

  // Here, TS infers Data Type from the JS Type
  // The ! means that the variable title wont be null or undefine. 
   @Column
   nombre!: string;

   @HasMany(() => Product)
   products!: Product[];
   
}