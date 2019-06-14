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
  tableName: 'Influencer'
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
}
