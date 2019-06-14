import {post, requestBody, get, RestBindings, param} from '@loopback/rest';
import { BaseController } from './base/base.controller';
import {inject} from '@loopback/core';
import Influencer from '../models/influencer.model';
import { Response } from '../common/model/response';
import { InfluencerBindings } from '../keys';
import { InfluencerService } from '../service/influencer.service';
import { FilterOptions } from '../common/model/filter.schema';

export class InfluencerController extends BaseController {
  constructor(
    @inject(RestBindings.Http.REQUEST) public request: any,
    @inject(InfluencerBindings.SERVICE)
    protected service: InfluencerService,
  ) {
    super();
  }

  @get('/influencers', {
    responses: {
      '200': {
        description: 'Get all influencers',
        content: {'application/json': {schema: {'x-ts-type': Influencer}}},
      },
    },
  })
  async findAll(
    @param.query.object('filter') options?: FilterOptions,
  ): Promise<Response> {
    return await this.response<Influencer[]>(await this.service.getAllInfluencer(options));
  }

  @get('/mostUsedWords')
  async mostUsedWords(
    @param.query.string('paragraph') paragraph: string,
    @param.query.number('nWord') nWord: number,
  ): Promise<Response> {
    return await this.response<string[]>(await this.service.mostUsedWords(paragraph,nWord));
  }
}
