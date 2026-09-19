import { Schema, model, Types } from 'mongoose';
import { TourCurrensy, TourStatus } from '../libs/enums/tour.enum';

const TourSchema = new Schema(
	{
		memberId: {
			type: Types.ObjectId,
			ref: 'Member',
			required: true,
			index: true,
		},

		destinationId: {
			type: Types.ObjectId,
			ref: 'Destination',
			required: true,
			index: true,
		},

		tourName: {
			type: String,
			required: true,
			trim: true,
		},

		tourSlug: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			index: true,
		},

		tourDesc: {
			type: String,
			trim: true,
		},

		tourStatus: {
			type: String,
			enum: TourStatus,
			default: TourStatus.ACTIVE,
			index: true,
		},

		tourPrice: {
			type: Number,
			required: true,
			min: 0,
		},

		tourCurrency: {
			type: String,
			required: true,
			enum: TourCurrensy,
		},

		tourStartDate: {
			type: Date,
			required: true,
		},

		tourEndDate: {
			type: Date,
			required: true,
		},

		tourCapacity: {
			type: Number,
			min: 1,
		},

		tourDepartureCountry: {
			type: String,
			trim: true,
		},
		tourDepartureCity: {
			type: String,
			trim: true,
		},
		tourDeparturePlace: {
			type: String,
			trim: true,
		},
		tourDestinationCountry: {
			type: String,
			trim: true,
		},
		tourDestinationCity: {
			type: String,
			trim: true,
		},

		tourImages: {
			type: [String],
			default: [],
		},

		tourAdditionalInfo: {
			type: String,
			trim: true,
		},

		tourViews: {
			type: Number,
			default: 0,
			min: 0,
		},

		tourLikes: {
			type: Number,
			default: 0,
			min: 0,
		},

		tourComments: {
			type: Number,
			default: 0,
			min: 0,
		},
		tourRating: {
			type: Number,
			default: 0,
			min: 0,
			max: 5,
		},

		tourRatingCount: {
			type: Number,
			default: 0,
			min: 0,
		},

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
export default TourSchema;
