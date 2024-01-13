// list.model.ts

import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Category } from 'src/modules/category/model/category.model';

@Table
export class List extends Model {
  @Column
  name: string;

  // Определяем отношение "многие к одному" (Many-to-One) с моделью User
  @BelongsTo(() => Category)
  categories: Category;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
