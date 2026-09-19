import { Schema, model, Types } from 'mongoose';
import { MessageType } from '../libs/enums/message.enum';

const MessageSchema = new Schema(
	{
		chatId: {
			type: Types.ObjectId,
			ref: 'Chat',
			required: true,
			index: true,
		},

		senderId: {
			type: Types.ObjectId,
			ref: 'Member',
			required: true,
			index: true,
		},

		messageType: {
			type: String,
			enum: MessageType,
			default: MessageType.TEXT,
		},

		messageContent: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
	},
);

MessageSchema.index({ chatId: 1, createdAt: -1 });

export default MessageSchema;
