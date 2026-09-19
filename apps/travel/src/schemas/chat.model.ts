import { Schema, model, Types } from 'mongoose';

const ChatSchema = new Schema(
	{
		chatType: {
			type: String,
			enum: ['PRIVATE'],
			required: true,
			index: true,
		},

		memberOneId: {
			type: Types.ObjectId,
			ref: 'Member',
			required: true,
			index: true,
		},

		memberTwoId: {
			type: Types.ObjectId,
			ref: 'Member',
			required: true,
			index: true,
		},

		lastMessage: {
			type: String,
			trim: true,
		},

		lastMessageAt: {
			type: Date,
			index: true,
		},
	},
	{
		timestamps: true,
		collection: 'chats',
	},
);

ChatSchema.index({ memberOneId: 1, memberTwoId: 1 }, { unique: true });

export default ChatSchema;
