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
	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	destinationId?: string;

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
	propertyCountry: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	propertyCity: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	propertyAddress: string;

	@Field(() => Float)
	@IsNumber()
	@Min(0)
	@IsNotEmpty()
	propertyPricePerNight: number;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	propertyCurrency?: string;

	@Field(() => Int)
	@IsInt()
	@Min(1)
	@IsNotEmpty()
	propertyMaxGuests: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	@Min(0)
	propertyBedrooms?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	@Min(0)
	propertyBeds?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	@Min(0)
	propertyBathrooms?: number;

	@Field(() => [PropertyAmenity], { nullable: true })
	@IsOptional()
	@IsArray()
	@IsEnum(PropertyAmenity, { each: true })
	propertyAmenities?: PropertyAmenity[];

	@Field(() => [String], { nullable: true })
	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	images?: string[];
}
