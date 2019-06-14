import {Application, CoreBindings, inject} from '@loopback/core';
import { Response } from '../../common/model/response';

export class BaseController {
  @inject(CoreBindings.APPLICATION_INSTANCE)
  public application: Application;

  async response<T>(data: T): Promise<Response> {
    return new Promise((resolve, reject) => {
      try {
        let response = new Response();
        response.Data = data;

        return resolve(response);
      } catch (e) {
        return reject(e);
      }
    });
  }

  async responseWithCount<T>(data: T, count: number): Promise<Response> {
    return new Promise((resolve, reject) => {
      try {
        let response = new Response();
        response.Data = data;
        response.Count = count;

        return resolve(response);
      } catch (e) {
        return reject(e);
      }
    });
  }
}
