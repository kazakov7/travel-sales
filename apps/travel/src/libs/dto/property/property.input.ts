import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
	IsArray,
	IsEnum,
	IsInt,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Max,
	MaxLength,
	Min,
} from 'class-validator';
import { PropertyAmenity, PropertyType } from '../../enums/property.enum';
@InputType()
export class CreatePropertyInput {
	@Field(() => PropertyType)
	@IsNotEmpty()
	@IsEnum(PropertyType)
	propertyType: PropertyType;

	@Field()
	@IsString()
	@IsNotEmpty()
	@MaxLength(200)
	propertyName: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@MaxLength(3000)
	propertyDesc?: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	country: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	city: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	address: string;

	@Field(() => Float)
	@IsNumber()
	@Min(0)
	pricePerNight: number;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	currency?: string;

	@Field(() => Int)
	@IsInt()
	@Min(1)
	maxGuests: number;

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
