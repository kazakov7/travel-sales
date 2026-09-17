import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { IsOptional, IsEnum, IsString, IsNotEmpty, MaxLength, IsNumber, Min, IsInt, IsArray } from 'class-validator';
import { PropertyType, PropertyAmenity } from '../../enums/property.enum';

@InputType()
export class UpdatePropertyInput {
	@Field(() => PropertyType, { nullable: true })
	@IsOptional()
	@IsEnum(PropertyType)
	propertyType?: PropertyType;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	@MaxLength(200)
	propertyName?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@MaxLength(3000)
	propertyDesc?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	country?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	city?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	address?: string;

	@Field(() => Float, { nullable: true })
	@IsOptional()
	@IsNumber()
	@Min(0)
	pricePerNight?: number;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	currency?: string;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	@Min(1)
	maxGuests?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	@Min(0)
	bedrooms?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	@Min(0)
	beds?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	@Min(0)
	bathrooms?: number;

	@Field(() => [PropertyAmenity], { nullable: true })
	@IsOptional()
	@IsArray()
	@IsEnum(PropertyAmenity, { each: true })
	amenities?: PropertyAmenity[];

	@Field(() => [String], { nullable: true })
	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	images?: string[];
}
