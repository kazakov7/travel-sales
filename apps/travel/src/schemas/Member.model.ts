import { Schema } from 'mongoose';
import { defaultFieldResolver } from 'graphql';
import { MemberType, MemberStatus, MemberAuthType, AgentType } from '../libs/enums/member.enum';

const MemberSchema = new Schema(
	{
		// ─────────────────────────────
		// Account
		// ─────────────────────────────

		memberType: {
			type: String,
			enum: MemberType,
			default: MemberType.USER,
			index: true,
		},

		memberStatus: {
			type: String,
			enum: MemberStatus,
			default: MemberStatus.ACTIVE,
			index: true,
		},

		memberAuthType: {
			type: String,
			enum: MemberAuthType,
			default: MemberAuthType.PHONE,
		},

		// ─────────────────────────────
		// Authentication
		// ─────────────────────────────

		memberPhone: {
			type: String,
			unique: true,
			sparse: true,
		},

		memberEmail: {
			type: String,
			unique: true,
			sparse: true,
			lowercase: true,
			trim: true,
		},

		memberPassword: {
			type: String,
			select: false,
		},

		lastLoginAt: {
			type: Date,
		},

		// ─────────────────────────────
		// Profile
		// ─────────────────────────────

		memberNick: {
			type: String,
			unique: true,
			trim: true,
			index: true,
		},

		memberFullName: {
			type: String,
			trim: true,
		},

		memberImage: {
			type: String,
		},

		memberDesc: {
			type: String,
			maxlength: 500,
		},

		memberAddress: {
			type: String,
		},

		// ─────────────────────────────
		// Agent
		// ─────────────────────────────

		agentType: {
			type: String,
			enum: AgentType,
		},

		agentCompanyName: {
			type: String,
		},

		agentBusinessNumber: {
			type: String,
			unique: true,
			sparse: true,
		},

		agentVerified: {
			type: Boolean,
			default: false,
		},

		// ─────────────────────────────
		// Statistics
		// ─────────────────────────────

		memberFollowers: {
			type: Number,
			default: 0,
		},

		memberFollowings: {
			type: Number,
			default: 0,
		},

		memberLikes: {
			type: Number,
			default: 0,
		},

		memberViews: {
			type: Number,
			default: 0,
		},

		memberComments: {
			type: Number,
			default: 0,
		},

		memberProperties: {
			type: Number,
			default: 0,
		},

		memberTours: {
			type: Number,
			default: 0,
		},

		memberArticles: {
			type: Number,
			default: 0,
		},

		memberPoints: {
			type: Number,
			default: 0,
		},

		memberRank: {
			type: Number,
			default: 0,
		},

		// ─────────────────────────────
		// Moderation
		// ─────────────────────────────

		memberWarnings: {
			type: Number,
			default: 0,
		},

		memberBlocks: {
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
		collection: 'members',
	},
);
export default MemberSchema;
