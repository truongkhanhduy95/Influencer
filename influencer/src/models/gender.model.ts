import {
  Table,
  Column,
  DataType,

} from 'sequelize-typescript';

import { BaseModel } from './base/base.model';
import { model } from '@loopback/repository';

@model()
@Table({
  tableName: 'Gender',
  paranoid: true,
  underscored: true,
})
export default class Gender extends BaseModel<Gender> {
  @Column({
    type: DataType.STRING,
  })
  name: string;

}
