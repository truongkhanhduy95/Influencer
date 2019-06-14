import { BaseService } from '../common/service/base.service';
import Influencer from '../models/influencer.model';
import { StringHelper } from '../ultilities/string.util';

export class InfluencerService extends BaseService {
  constructor(
  ) {
    super();
  }

  async getAllInfluencer(): Promise<Influencer[]> {
    return Influencer.findAll();
  }

  async searchInfluencers(searchKey: string) : Promise<Influencer[]> {
    return [];
  }

  async mostUsedWords(paragraph: string, nWord: number) :Promise<string[]> {
    return StringHelper.mostUsedWords(paragraph, nWord);
  }
}
