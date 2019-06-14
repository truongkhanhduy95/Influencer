import { Command } from "./command";
import { inject } from "@loopback/core";
import { Sequelize } from "sequelize-typescript";


export class SequelizeSync implements Command {
  @inject('Sequelize')
  private sequelize: Sequelize;

  async handle() {
    console.log(' ---- Start migrating default tables.....');
    await this.sequelize.sync({ alter: true, force: false });
  }

  isRunning(): boolean {
    return false;
  }
}
