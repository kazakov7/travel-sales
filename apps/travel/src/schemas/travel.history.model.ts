import { Schema, model, Types } from 'mongoose';

const TravelHistorySchema = new Schema(
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

		visitedAt: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
		updatedAt: false,
		collection: 'travel-histories',
	},
);

TravelHistorySchema.index({ memberId: 1, destinationId: 1, bookingId: 1 }, { unique: true });

export default TravelHistorySchema;
