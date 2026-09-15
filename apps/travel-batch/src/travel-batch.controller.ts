import { Controller, Get } from '@nestjs/common';
import { TravelBatchService } from './travel-batch.service';

@Controller()
export class TravelBatchController {
  constructor(private readonly travelBatchService: TravelBatchService) {}

  @Get()
  getHello(): string {
    return this.travelBatchService.getHello();
  }
}
