// list.model.ts

import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { List } from 'src/modules/list/model/list.model';
import { User } from 'src/modules/user/model/user.model';

@Table
export class Category extends Model {
  @Column
  name: string;

  // Определяем отношение "многие к одному" (Many-to-One) с моделью User
  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @HasMany(() => List)
  lists: List[];
}
