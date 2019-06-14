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
import Influencer from './influencer.model';
import SocialNetwork from './social-network.model';

@model()
// @Table({
//   tableName: 'InfluencerSocialNetwork'
// })
export default class InfluencerSocialNetwork extends BaseModel<InfluencerSocialNetwork> {

  @ForeignKey(() => Influencer)
  @Column({onDelete: 'CASCADE'})
  influencer_id: number;


  @ForeignKey(() => SocialNetwork)
  @Column({onDelete: 'CASCADE'})
  social_network_id: number;

  @Column({
    type: DataType.STRING,
  })
  link: string;

  [prop: string]: any;

}
