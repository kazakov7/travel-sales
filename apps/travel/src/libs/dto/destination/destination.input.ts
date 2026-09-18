import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString, MaxLength, IsArray } from 'class-validator';

@InputType()
export class DestinationInput {
	@Field(() => String)
	@IsString()
	destinationName: string;

	@Field(() => String)
	@IsString()
	destinationSlug: string;

	@Field(() => String)
	@IsString()
	destinationCountry: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationCity?: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationAddress?: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	destinationParentId?: string;

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
