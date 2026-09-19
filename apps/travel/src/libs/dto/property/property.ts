import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';

import { PropertyAmenity, PropertyStatus, PropertyType } from '../../enums/property.enum';
import { Types } from 'mongoose';
@ObjectType()
export class Property {
	@Field()
	_id: Types.ObjectId;

	@Field()
	memberId: Types.ObjectId;

	@Field(() => String)
	destinationId: Types.ObjectId;

	@Field(() => PropertyType)
	propertyType: PropertyType;

	@Field()
	propertyName: string;

	@Field({ nullable: true })
	propertyDesc?: string;

	@Field(() => PropertyStatus)
	propertyStatus: PropertyStatus;

	@Field()
	propertyCountry: string;

	@Field()
	propertyCity: string;

	@Field()
	propertyAddress: string;

	@Field(() => Float)
	propertyPricePerNight: number;

	@Field()
	propertyCurrency: string;

	@Field(() => Int)
	propertyMaxGuests: number;

	@Field(() => Int)
	propertyBedrooms: number;

	@Field(() => Int)
	propertyBeds: number;

	@Field(() => Int)
	propertyBathrooms: number;

	@Field(() => [PropertyAmenity])
	propertyAmenities: PropertyAmenity[];

	@Field(() => [String])
	properytImages: string[];

	// Statistics
	@Field(() => Int)
	propertyViews: number;

	@Field(() => Int)
	propertyLikes: number;

	@Field(() => Int)
	propertyBookings: number;

	@Field(() => Float)
	propertyRating: number;

	@Field(() => Int)
	propertyRatingCount: number;

	@Field(() => Int)
	propertyComments: number;

	@Field({ nullable: true })
	deletedAt?: Date;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}
