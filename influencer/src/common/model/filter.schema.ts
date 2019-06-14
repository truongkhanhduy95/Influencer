import sequelize = require('sequelize');

export class FilterOptions {
  public criteria: Criteria;
  public order: string[][];
  public limit: number;
  public offset: number;
}

class Criteria {
  public reportDate: Period;
  public dueDate: Period;
  public createdLogDate: Period;
  public reportedBy: number[];
  public departments: number[];
  public areas: number[];
  public roles: number[];
  public locations: number[];
  public reportStatus: string[];
  public status: string[];
  public isReported: boolean;
  public isExpired: boolean;
  public logDescriptions: string[];
}

class Order {
  public orderItem: string[];
}

class Period {
  public from: Date;
  public to: Date;
}
