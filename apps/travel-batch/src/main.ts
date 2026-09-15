import { NestFactory } from '@nestjs/core';
import { TravelBatchModule } from './travel-batch.module';

async function bootstrap() {
	const app = await NestFactory.create(TravelBatchModule);
	await app.listen(process.env.BATCH_PORT ?? 3000);
}
bootstrap();
