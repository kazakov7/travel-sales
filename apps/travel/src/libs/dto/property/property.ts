import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';

import { PropertyAmenity, PropertyStatus, PropertyType } from '../../enums/property.enum';

@ObjectType()
export class Property {
	@Field()
	_id: string;

	@Field()
	memberId: string;

	@Field(() => PropertyType)
	propertyType: PropertyType;

	@Field()
	propertyName: string;

	@Field({ nullable: true })
	propertyDesc?: string;

	@Field(() => PropertyStatus)
	propertyStatus: PropertyStatus;

	@Field()
	country: string;

	@Field()
	city: string;

	@Field()
	address: string;

	@Field(() => Float)
	pricePerNight: number;

	@Field()
	currency: string;

	@Field(() => Int)
	maxGuests: number;

	@Field(() => Int)
	bedrooms: number;

	@Field(() => Int)
	beds: number;

	@Field(() => Int)
	bathrooms: number;

	@Field(() => [PropertyAmenity])
	amenities: PropertyAmenity[];

	@Field(() => [String])
	images: string[];

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
