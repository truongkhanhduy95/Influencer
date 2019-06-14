import { BaseService } from '../common/service/base.service';
import Influencer from '../models/influencer.model';

export class InfluencerService extends BaseService {
  constructor(
  ) {
    super();
  }

  async getAllInfluencer(): Promise<Influencer[]> {
    return Influencer.findAll();
  }
}
