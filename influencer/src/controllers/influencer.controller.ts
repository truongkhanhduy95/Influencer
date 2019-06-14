import {post, requestBody, get, RestBindings, param} from '@loopback/rest';
import { BaseController } from './base/base.controller';
import {inject} from '@loopback/core';
import Influencer from '../models/influencer.model';
import { Response } from '../common/model/response';
import { InfluencerBindings } from '../keys';
import { InfluencerService } from '../service/influencer.service';

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
  async findAll(): Promise<Response> {
    return await this.response<Influencer[]>(await this.service.getAllInfluencer());
  }
}
