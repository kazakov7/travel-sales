import { Schema } from 'mongoose';
import { PropertyAmenity, PropertyStatus, PropertyType } from '../libs/enums/property.enum';

const PropertySchema = new Schema(
	{
		// ─────────────────────────────
		// Owner
		// ─────────────────────────────

		memberId: {
			type: Schema.Types.ObjectId,
			ref: 'Member',
			required: true,
			index: true,
		},

		// ─────────────────────────────
		// Basic Information
		// ─────────────────────────────

		propertyType: {
			type: String,
			enum: PropertyType,
			required: true,
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
		},

		// ─────────────────────────────
		// Status
		// ─────────────────────────────

		propertyStatus: {
			type: String,
			enum: PropertyStatus,
			default: PropertyStatus.ACTIVE,
			index: true,
		},

		// ─────────────────────────────
		// Location
		// ─────────────────────────────

		country: {
			type: String,
			required: true,
			index: true,
		},

		city: {
			type: String,
			required: true,
			index: true,
		},

		address: {
			type: String,
			required: true,
		},

		// ─────────────────────────────
		// Pricing
		// ─────────────────────────────

		pricePerNight: {
			type: Number,
			required: true,
			min: 0,
		},

		currency: {
			type: String,
			default: 'KRW',
		},

		// ─────────────────────────────
		// Capacity
		// ─────────────────────────────

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

		// ─────────────────────────────
		// Amenities
		// ─────────────────────────────

		amenities: [
			{
				type: String,
				enum: PropertyAmenity,
			},
		],

		// ─────────────────────────────
		// Images
		// ─────────────────────────────

		images: [
			{
				type: String,
			},
		],

		// ─────────────────────────────
		// Statistics
		// ─────────────────────────────

		propertyViews: {
			type: Number,
			default: 0,
		},

		propertyLikes: {
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
		propertyComments: {
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
