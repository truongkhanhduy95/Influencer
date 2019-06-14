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
import Influencer from './influencer.model';
import Career from './career.model';

@model()
// @Table({
//   tableName: 'InfluencerCareer'
// })
export default class InfluencerCareer extends BaseModel<InfluencerCareer> {

  @ForeignKey(() => Influencer)
  @Column({onDelete: 'CASCADE'})
  influencer_id: number;


  @ForeignKey(() => Career)
  @Column({onDelete: 'CASCADE'})
  career_id: number;

  [prop: string]: any;
  // constructor(data?: Partial<RoleDepartment>) {
  //   super(data);
  // }
}
