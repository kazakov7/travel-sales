import { Field, Int, InputType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { IsIn, IsNotEmpty, IsOptional, Length, Min, IsInt } from 'class-validator';
import { BookingCategory, BookingStatus } from '../../enums/booking.enum';
import { Direction } from '../../enums/common.enum';
// import { availableBookingSorts } from '../../config';

@InputType()
export class BookingInput {
	/** memberId resolverdagi @AuthMember dan olinadi, clientdan kelmaydi */
	memberId?: ObjectId;

	@IsNotEmpty()
	@Field(() => BookingCategory)
	bookingCategory: BookingCategory;

	@IsNotEmpty()
	@Field(() => String)
	bookingRefId: ObjectId;

	@IsNotEmpty()
	@IsInt()
	@Min(1)
	@Field(() => Int)
	bookingGuests: number;

	@IsOptional()
	@Length(3, 500)
	@Field(() => String, { nullable: true })
	bookingNote?: string;
}

// @InputType()
// class BISearch {
// 	@IsOptional()
// 	@Field(() => String, { nullable: true })
// 	memberId?: ObjectId;

// 	@IsOptional()
// 	@Field(() => BookingCategory, { nullable: true })
// 	bookingCategory?: BookingCategory;

// 	@IsOptional()
// 	@Field(() => [BookingStatus], { nullable: true })
// 	bookingStatusList?: BookingStatus[];

// 	@IsOptional()
// 	@Field(() => String, { nullable: true })
// 	bookingRefId?: ObjectId;

// 	@IsOptional()
// 	@Field(() => String, { nullable: true })
// 	text?: string;
// }

// @InputType()
// export class BookingsInquiry {
// 	@IsNotEmpty()
// 	@Min(1)
// 	@Field(() => Int)
// 	page: number;

// 	@IsNotEmpty()
// 	@Min(1)
// 	@Field(() => Int)
// 	limit: number;

// 	@IsOptional()
// 	@IsIn(availableBookingSorts)
// 	@Field(() => String, { nullable: true })
// 	sort?: string;

// 	@IsOptional()
// 	@Field(() => Direction, { nullable: true })
// 	direction?: Direction;

// 	@IsNotEmpty()
// 	@Field(() => BISearch)
// 	search: BISearch;
// }
