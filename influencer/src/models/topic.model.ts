import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Model,
} from 'sequelize-typescript';

import { BaseModel } from './base/base.model';
import { model } from '@loopback/repository';

@model()
@Table({
  tableName: 'Topic',
  paranoid: true,
  underscored: true,
})
export default class Topic extends BaseModel<Topic> {
  @Column({
    type: DataType.STRING,
  })
  content: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

}
