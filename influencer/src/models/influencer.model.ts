import {
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  Model,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';

import { BaseModel } from './base/base.model';
import { model } from '@loopback/repository';
import Gender from './gender.model';
import InfluencerCareer from './influencer-career.model';
import Career from './career.model';
import SocialNetwork from './social-network.model';
import InfluencerSocialNetwork from './influencer-social-network.model';
import Topic from './topic.model';
import InfluencerTopic from './influencer-topic.model';
import FacebookPage from './facebook-page.model';

@model()
@Table({
  tableName: 'Influencer',
  paranoid: true,
  underscored: true,
})
export default class Influencer extends BaseModel<Influencer> {
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.DATE,
  })
  birth_day: Date;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @HasMany(()=> FacebookPage)
  facebook_pages: FacebookPage[];

  @Column({
    type: DataType.INTEGER,
  })
  average_interaction: number;

  @Column({
    type: DataType.STRING,
  })
  bank_number: string;

  @Column({
    type: DataType.STRING,
  })
  identification_number: string;

  @ForeignKey(() => Gender)
  @Column
  genderId: number;

  @BelongsTo(() => Gender)
  gender: Gender;

  @BelongsToMany(() => Career, () => InfluencerCareer)
  careers: Career[];

  @BelongsToMany(() => SocialNetwork, () => InfluencerSocialNetwork)
  social_networks: SocialNetwork[];

  @BelongsToMany(() => Topic, () => InfluencerTopic)
  topics: Topic[];
}
