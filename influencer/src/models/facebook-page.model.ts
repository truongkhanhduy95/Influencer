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
//   tableName: 'FacebookPage'
// })
export default class FacebookPage extends BaseModel<FacebookPage> {
  @Column({
    type: DataType.STRING,
  })
  facebook_link: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

}
