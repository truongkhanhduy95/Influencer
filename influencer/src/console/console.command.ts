import { Application, Component, CoreBindings } from "@loopback/core";
import { inject } from "@loopback/context";
import { SequelizeSync } from "./commands/migrate.sequelize.update";

export class ConsoleComponent implements Component {
  constructor(@inject(CoreBindings.APPLICATION_INSTANCE) private application: Application) {
    this.application.bind('migrate:sequelize:sync').toClass(SequelizeSync);
  }
}
