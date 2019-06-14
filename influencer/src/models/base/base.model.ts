import {Model, DataType, UpdatedAt, Column, CreatedAt} from 'sequelize-typescript';

/**
 * @class BaseModel
 */
export class BaseModel<T extends Model<T>> extends Model<T> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  createdDate: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updatedDate: Date;
  
  /**
   * @param jsonObject
   */
  exchange(jsonObject: any): Model<T> {
    let model = this.toJSON();

    for (let key in model) {
      if (jsonObject.hasOwnProperty(key)) {
        let value = jsonObject[key];
        if (value != null) this.set(key, value);
      }
    }

    return this;
  }
}
