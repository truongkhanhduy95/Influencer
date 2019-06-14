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
import Topic from './topic.model';

@model()
// @Table({
//   tableName: 'InfluencerTopic'
// })
export default class InfluencerTopic extends BaseModel<InfluencerTopic> {

  @ForeignKey(() => Influencer)
  @Column({onDelete: 'CASCADE'})
  influencer_id: number;


  @ForeignKey(() => Topic)
  @Column({onDelete: 'CASCADE'})
  topic_id: number;

  [prop: string]: any;
  // constructor(data?: Partial<RoleDepartment>) {
  //   super(data);
  // }
}
