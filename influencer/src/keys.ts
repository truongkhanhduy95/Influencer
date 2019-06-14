import { BindingKey } from '@loopback/context';
import { InfluencerService } from './service/influencer.service';

export namespace InfluencerBindings {
  export const SERVICE = BindingKey.create<InfluencerService>('services.influencer');
}