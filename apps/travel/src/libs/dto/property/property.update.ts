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
	propertyCountry?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	propertyCity?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	propertyAddress?: string;

	@Field(() => Float, { nullable: true })
	@IsOptional()
	@IsNumber()
	@Min(0)
	propertyPricePerNight?: number;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	propertyCurrency?: string;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@Min(1)
	propertyMaxGuests?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@Min(0)
	propertyBedrooms?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@Min(0)
	propertyBeds?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@Min(0)
	propertyBathrooms?: number;

	@Field(() => [PropertyAmenity], { nullable: true })
	@IsOptional()
	@IsEnum(PropertyAmenity, { each: true })
	propertyAmenities?: PropertyAmenity[];

	@Field(() => [String], { nullable: true })
	@IsOptional()
	@IsString({ each: true })
	properytImages?: string[];
}
