import { BaseService } from '../common/service/base.service';
import Influencer from '../models/influencer.model';
import { StringHelper } from '../ultilities/string.util';
import { FilterOptions } from '../common/model/filter.schema';
import { Sequelize } from 'sequelize-typescript';
import SocialNetwork from '../models/social-network.model';

export class InfluencerService extends BaseService {
  constructor(
  ) {
    super();
  }

  // Function list all influencer
  // Params: FilterOptions
  // -- Search by query schema
  async getAllInfluencer(filter?: FilterOptions): Promise<Influencer[]> {
    let whereOptions: any = {}; // default

    // Merge filter
    if (filter && filter.criteria) {
      if (filter.criteria.age) {
        if (filter.criteria.age.from && filter.criteria.age.to) {
          whereOptions.age = {
            $between: [
              filter.criteria.age.from,
              filter.criteria.age.to,
            ],
          };
        } else if (filter.criteria.age.from) {
          whereOptions.age = {
            $gte: filter.criteria.age.from,
          };
        } else
          whereOptions.age = {
            $lt: filter.criteria.age.to,
          };
      }
      // Wildcard search name
      if (filter.criteria.name)
        whereOptions.name = {[Sequelize.Op.like]: `%${filter.criteria.name}}%`};
      
      // Wildcard search address
      if (filter.criteria.address)
        whereOptions.address = {[Sequelize.Op.like]: `%${filter.criteria.address}}%`};
      // Wildcard search id_number
      if (filter.criteria.id_number)
        whereOptions.id_number = {[Sequelize.Op.like]: `%${filter.criteria.id_number}}%`};
      
      // Wildcard search bank_number
      if (filter.criteria.bank_number)
        whereOptions.bank_number = {[Sequelize.Op.like]: `%${filter.criteria.bank_number}}%`};
      
      // Search social network
      if (filter.criteria.social_network && filter.criteria.social_network.length > 0) {
        // Find list social network
        // Wildcard search name
        let sn_IDs = SocialNetwork.findAll({where: {name : filter.criteria.social_network}})
        whereOptions.social_network = sn_IDs;
      }
        
    }
    return Influencer.findAll({
      where : whereOptions
    });
  }

  // Function find most used words in a paragraph
  async mostUsedWords(paragraph: string, nWord: number) :Promise<string[]> {
    return StringHelper.mostUsedWords(paragraph, nWord);
  }
}
