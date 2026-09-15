import { Injectable } from '@nestjs/common';

@Injectable()
export class TravelBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
