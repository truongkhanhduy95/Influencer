import {
  Component,
  inject,
  CoreBindings,
  Application,
  ProviderMap,
  Binding,
} from '@loopback/core';
import {EventEmitter} from 'events';
import {Sequelize} from 'sequelize-typescript';
import * as services from './service';

const config = require('../config/app.js');
const database = require('../config/database.js');

export class AppComponent implements Component {
  /**
   *  @type {ProviderMap}
   */
  providers?: ProviderMap;

  /**
   *  @type {Binding[]}
   */
  bindings?: Binding[];

  /**
   * @type {[]}
   */
  bindServices: any = [];

  /**
   * @type {string[][]}
   */
  subscribe: any = [];

  events: EventEmitter;

  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
  ) {
    let promise = new Promise(async (resolve, reject) => {
      try {
        this.bindServices = config.services ? config.services : [];
        await this.registerServices();

        this.events = new EventEmitter();
        this.application.bind('events').to(this.events);

        return resolve(this);
      } catch (ex) {
        return reject(ex);
      }
    });

    promise.then(async () => {
      await this.registerORM();
    });
  }

  async registerServices() {
    let sv = services;
    let bindings: Binding[] = [];

    this.bindServices.forEach((item: any) => {
      let name = `sv.${item}`;
      let bindingService = Binding.bind(item).toClass(eval(name));

      bindings.push(bindingService);
    });

    this.bindings = bindings;
  }

  async registerORM() {
    let config: any = database['connections'][database['default']];
    config.logging = false;
    let sequelize = new Sequelize(config);
    sequelize.addModels([__dirname + '/models']);

    // console.log(sequelize.models)
    this.application.bind('Sequelize').to(sequelize);

  }
}
