import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsMongoId, IsNotEmpty } from 'class-validator';

@InputType()
export class TravelHistoryInput {
	@Field()
	@IsMongoId()
	@IsNotEmpty()
	memberId: string;

	@Field()
	@IsMongoId()
	@IsNotEmpty()
	destinationId: string;

	@Field()
	@IsDate()
	@IsNotEmpty()
	visitedAt: Date;
}
