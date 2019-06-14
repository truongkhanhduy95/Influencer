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
@Table({
  tableName: 'SocialNetwork',
  paranoid: true,
  underscored: true,
})
export default class SocialNetwork extends BaseModel<SocialNetwork> {
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

}
