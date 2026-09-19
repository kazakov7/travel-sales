import { registerEnumType } from '@nestjs/graphql';

export enum TourStatus {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE',
	SOLD_OUT = 'SOLD_OUT',
	COMPLETED = 'COMPLETED',
	CANCELLED = 'CANCELLED',
}
registerEnumType(TourStatus, {
	name: 'TourStatus',
});
export enum TourCurrensy {
	USD = 'usd',
	KRW = 'krw',
}
registerEnumType(TourCurrensy, {
	name: 'TourCurrensy',
});
