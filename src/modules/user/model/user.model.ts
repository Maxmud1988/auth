// user.model.ts

import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Category } from 'src/modules/category/model/category.model';

@Table
export class User extends Model {
  @Column
  firstName;

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
