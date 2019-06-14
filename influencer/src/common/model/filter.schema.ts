import sequelize = require('sequelize');

export class FilterOptions {
  public criteria: Criteria;
  public limit: number;
  public offset: number;
}

class Criteria {
  public name: string;
  public address: string;
  public id_number: string;
  public bank_number: string;
  public age: Period;
  public social_network: string[];
}

class Period {
  public from: Date;
  public to: Date;
}
