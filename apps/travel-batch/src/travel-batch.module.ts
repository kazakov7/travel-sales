import { Module } from '@nestjs/common';
import { TravelBatchController } from './travel-batch.controller';
import { TravelBatchService } from './travel-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TravelBatchController],
  providers: [TravelBatchService],
})
export class TravelBatchModule {}
