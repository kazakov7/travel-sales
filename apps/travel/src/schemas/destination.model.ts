import { Schema } from 'mongoose';
import { DestinationStatus } from '../libs/enums/destination';

const DestinationSchema = new Schema(
	{
		// ─────────────────────────────
		// Basic Information
		// ─────────────────────────────

		destinationStatus: {
			type: String,
			enum: DestinationStatus,
			default: DestinationStatus.ACTIVE,
			index: true,
		},

		destinationName: {
			type: String,
			required: true,
			trim: true,
		},

		destinationSlug: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			index: true,
		},

		// ─────────────────────────────
		// Location
		// ─────────────────────────────

		destinationCountry: {
			type: String,
			required: true,
			trim: true,
		},

		destinationCity: {
			type: String,
			trim: true,
		},

		destinationAddress: {
			type: String,
			trim: true,
		},

		// ─────────────────────────────
		// Hierarchy
		// ─────────────────────────────

		destinationParentId: {
			type: Schema.Types.ObjectId,
			ref: 'Destination',
			default: null,
			index: true,
		},

		// ─────────────────────────────
		// Content
		// ─────────────────────────────

		destinationImages: {
			type: [String],
			default: [],
		},

		destinationDesc: {
			type: String,
			maxlength: 2000,
		},

		// ─────────────────────────────
		// Statistics
		// ─────────────────────────────

		destinationViews: {
			type: Number,
			default: 0,
		},

		destinationProperties: {
			type: Number,
			default: 0,
		},

		destinationTours: {
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
		collection: 'destinations',
	},
);

export default DestinationSchema;
