import { Schema } from 'mongoose';
import { PropertyAmenity, PropertyCurrensy, PropertyStatus, PropertyType } from '../libs/enums/property.enum';

const PropertySchema = new Schema(
	{
		memberId: {
			type: Schema.Types.ObjectId,
			ref: 'Member',
			required: true,
			index: true,
		},
		destinationId: {
			type: Schema.Types.ObjectId,
			ref: 'Destination',
			required: true,
			index: true,
		},
		propertyType: {
			type: String,
			enum: PropertyType,
			required: true,
		},
		propertyStatus: {
			type: String,
			enum: PropertyStatus,
			default: PropertyStatus.ACTIVE,
			index: true,
		},

		propertyName: {
			type: String,
			required: true,
			trim: true,
			index: true,
		},

		propertyDesc: {
			type: String,
			maxlength: 3000,
			minLength: 5,
		},

		propertyCountry: {
			type: String,
			required: true,
			index: true,
		},

		propertyCity: {
			type: String,
			required: true,
			index: true,
		},

		propertyAddress: {
			type: String,
			required: true,
		},
		images: [
			{
				type: String,
			},
		],

		propertyPricePerNight: {
			type: Number,
			required: true,
			min: 0,
		},

		propertyCurrency: {
			type: String,
			required: true,
			enum: PropertyCurrensy,
		},

		maxGuests: {
			type: Number,
			required: true,
			min: 1,
		},

		bedrooms: {
			type: Number,
			default: 1,
			min: 0,
		},

		beds: {
			type: Number,
			default: 1,
			min: 0,
		},

		bathrooms: {
			type: Number,
			default: 1,
			min: 0,
		},
		amenities: [
			{
				type: String,
				enum: PropertyAmenity,
			},
		],

		propertyViews: {
			type: Number,
			default: 0,
		},

		propertyLikes: {
			type: Number,
			default: 0,
		},
		propertyComments: {
			type: Number,
			default: 0,
		},

		propertyBookings: {
			type: Number,
			default: 0,
		},

		propertyRating: {
			type: Number,
			default: 0,
			min: 0,
			max: 5,
		},

		propertyRatingCount: {
			type: Number,
			default: 0,
		},

		// ─────────────────────────────
		// System
		// ─────────────────────────────

		deletedAt: {
			type: Date,
			default: null,
		},
	},
	{
		timestamps: true,
		collection: 'properties',
	},
);

export default PropertySchema;
