import {Model} from 'sequelize-typescript';

/**
 * @class BaseModel
 */
export class BaseModel<T extends Model<T>> extends Model<T> {
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
