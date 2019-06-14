import { Application, CoreBindings } from "@loopback/core";
import { inject } from "@loopback/context";
import { Sequelize } from "sequelize-typescript";

/**
 * class BaseService
 */
export class BaseService {
  @inject(CoreBindings.APPLICATION_INSTANCE, { optional: true })
  protected application: Application;


  /**
   * @param namespace
   */
  async getRepository(namespace: string) {
    return await this.application.get(namespace);
  }

  /**
   *
   */
  async getSequelize(): Promise<Sequelize> {
    return await this.application.get('Sequelize');
  }

  /**
   * @param name
   */
  async getAsycn(name: string) {
    return await this.application.get(name);
  }

  /**
   * @param name
   */
  getSycn(name: string) {
    return this.application.getSync(name);
  }
}
