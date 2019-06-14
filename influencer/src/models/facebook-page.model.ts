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

@model()
@Table({
  tableName: 'FacebookPage',
  paranoid: true,
  underscored: true,
})
export default class FacebookPage extends BaseModel<FacebookPage> {
  @Column({
    type: DataType.STRING,
  })
  facebook_link: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ForeignKey(() => Influencer)
  @Column
  influencerId: number;

  @BelongsTo(() => Influencer)
  influencer: Influencer;

}
