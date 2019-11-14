import { RedisChatService, RedisTomatoService } from '../app/util/redis';
import tokenService from '../app/util/jwt';

declare module 'egg' {
  interface Application {
    consul:any;
    mongoose: any;
    validator: any;
  }
}
