import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { DestinationStatus } from '../../enums/destination';

@InputType()
export class DestinationUpdate {
	@Field(() => DestinationStatus, { nullable: true })
	@IsOptional()
	@IsEnum(DestinationStatus)
	destinationStatus?: DestinationStatus;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationName?: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationSlug?: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationCountry?: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationCity?: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationAddress?: string;

	@Field(() => [String], { nullable: true })
	@IsOptional()
	@IsArray()
	destinationImages?: string[];

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	@MaxLength(2000)
	destinationDesc?: string;
}
