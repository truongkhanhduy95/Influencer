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

import { BaseModel } from './base/base.model';
import { model } from '@loopback/repository';

@model()
// @Table({
//   tableName: 'Gender'
// })
export default class Gender extends BaseModel<Gender> {
  @Column({
    type: DataType.STRING,
  })
  name: string;

}
