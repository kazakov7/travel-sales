import { Schema, model, Types } from 'mongoose';
import { BookingCategory, BookingStatus } from '../libs/enums/booking.enum';

const BookingSchema = new Schema(
	{
		memberId: {
			type: Types.ObjectId,
			ref: 'Member',
			required: true,
			index: true,
		},

		bookingCategory: {
			type: String,
			enum: BookingCategory,
			required: true,
			index: true,
		},
		bookingStatus: {
			type: String,
			enum: BookingStatus,
			default: BookingStatus.PENDING,
		},

		bookingRefId: {
			type: Types.ObjectId,
			required: true,
			index: true,
		},

		bookingGuests: {
			type: Number,
			required: true,
			min: 1,
		},

		bookingTotalPrice: {
			type: Number,
			required: true,
			min: 0,
		},

		bookingNote: {
			type: String,
			trim: true,
		},

		cancelledAt: {
			type: Date,
			default: null,
		},
	},
	{
		timestamps: true,
		collection: 'bookings',
	},
);

BookingSchema.index({
	memberId: 1,
	bookingCategory: 1,
	bookingRefId: 1,
});

export default BookingSchema;
