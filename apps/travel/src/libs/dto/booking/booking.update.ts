import { Field, Int, InputType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { BookingStatus } from '../../enums/booking.enum';

@InputType()
export class BookingUpdate {
	@IsNotEmpty()
	@Field(() => String)
	_id: ObjectId;

	@IsOptional()
	@Field(() => BookingStatus, { nullable: true })
	bookingStatus?: BookingStatus;

	@IsOptional()
	@IsInt()
	@Min(1)
	@Field(() => Int, { nullable: true })
	bookingGuests?: number;

	@IsOptional()
	@Length(3, 500)
	@Field(() => String, { nullable: true })
	bookingNote?: string;

	/** bookingStatus = CANCELLED bo'lganda service ichida o'rnatiladi */
	cancelledAt?: Date;
}
