import { Application, ApplicationConfig, inject } from "@loopback/core";
import { RepositoryMixin } from "@loopback/repository";
import { BootMixin } from "@loopback/boot";
import { ServiceMixin } from "@loopback/service-proxy";
import { AppComponent } from "./app.component";
import { ConsoleComponent } from "./console/console.command";
import { Command } from "./console/commands/command";

export class ConsoleApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(Application)),
) {
  constructor(options: ApplicationConfig = {}) {
    super();
    // this.component(CommonComponent);
    this.component(AppComponent);
    this.component(ConsoleComponent);

    this.projectRoot = __dirname;
  }

  async start() {
    let name = process.argv[2];
    let object: Command = await this.get(name);
    let promise: Promise<any> = await object.handle();

    if (await !object.isRunning()) {
      console.log('exit');
      process.exit(0);
    }
  }
}
