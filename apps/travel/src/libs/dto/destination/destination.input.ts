import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString, MaxLength, IsArray, IsNotEmpty } from 'class-validator';

@InputType()
export class DestinationInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	destinationName: string;

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	destinationSlug: string;

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	destinationCountry: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
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
