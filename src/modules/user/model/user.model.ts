// user.model.ts

import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Category } from '../../category/model/category.model';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  userName: string;

  @Column
  email: string;

  @Column
  password: string;

  // Определяем отношение "один ко многим" (One-to-Many) с моделью Category
  @HasMany(() => Category)
  categories: Category[];
}
