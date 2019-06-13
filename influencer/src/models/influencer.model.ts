import {
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  Model,
} from 'sequelize-typescript';

import { BaseModel } from './base.model';
import { model } from '@loopback/repository';

@model()
// @Table({
//   tableName: 'Influencer'
// })
export default class Influencer extends BaseModel<Influencer> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
  })
  name: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  createdDate: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updatedDate: Date;
}
