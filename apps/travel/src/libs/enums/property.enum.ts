import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	HOTEL = 'HOTEL',
	HOSTEL = 'HOSTEL',
	RESORT = 'RESORT',
	APARTMENT = 'APARTMENT',
	VILLA = 'VILLA',
}

registerEnumType(PropertyType, {
	name: 'PropertyType',
});
export enum PropertyStatus {
	ACTIVE = 'PENDING',
	INACTIVE = 'INACTIVE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyAmenity {
	WIFI = 'WIFI',
	PARKING = 'PARKING',
	AIR_CONDITIONING = 'AIR_CONDITIONING',
	BREAKFAST = 'BREAKFAST',
	SWIMMING_POOL = 'SWIMMING_POOL',
	GYM = 'GYM',
	SPA = 'SPA',
	KITCHEN = 'KITCHEN',
	WASHING_MACHINE = 'WASHING_MACHINE',
	PET_FRIENDLY = 'PET_FRIENDLY',
}
registerEnumType(PropertyAmenity, {
	name: 'PropertyAmenity',
});
