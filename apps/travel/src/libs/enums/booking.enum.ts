import { registerEnumType } from '@nestjs/graphql';

export enum BookingStatus {
	PENDING = 'PENDING',
	CONFIRMED = 'CONFIRMED',
	COMPLETED = 'COMPLETED',
	CANCELLED = 'CANCELLED',
}
registerEnumType(BookingStatus, {
	name: 'BookingStatus',
});
