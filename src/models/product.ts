import {Table, Model, Column, CreatedAt, HasMany, UpdatedAt} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import { Donation } from '../models/donation';

interface ProductAttributes{
  id: number;
  nombre: string;
  cantidad: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{}

@Table ({
  tableName: "Products"
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes>{

  // Here, TS infers Data Type from the JS Type
  // The ! means that the variable title wont be null or undefine. 
   @Column
   nombre!: string;

   @Column
   cantidad!: number;
   
   @HasMany(() => Donation)
   donaciones?: Donation[];

   @CreatedAt
   @Column
   createdAt!: Date;
 
   @UpdatedAt
   @Column
   updatedAt!: Date;
}