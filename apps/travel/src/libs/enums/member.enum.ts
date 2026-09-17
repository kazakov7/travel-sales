import { registerEnumType } from '@nestjs/graphql';

export enum MemberType {
	USER = 'USER',
	HOTEL_AGENT = 'HOTEL_AGENT',
	TOUR_AGENT = 'TOUR_AGENT',
	ADMIN = 'ADMIN',
}

registerEnumType(MemberType, {
	name: 'MemberType',
});

export enum MemberStatus {
	ACTIVE = 'ACTIVE',
	BLOCKED = 'BLOCKED',
	DELETED = 'DELETED',
}

registerEnumType(MemberStatus, {
	name: 'MemberStatus',
});

export enum MemberAuthType {
	PHONE = 'PHONE',
	EMAIL = 'EMAIL',
	TELEGRAM = 'TELEGRAM',
	GOOGLE = 'GOOGLE',
	KAKAO = 'KAKAO',
	APPLE = 'APPLE',
}

registerEnumType(MemberAuthType, {
	name: 'MemberAuthType',
});

export enum AgentType {
	HOTEL = 'HOTEL',
	TOUR = 'TOUR',
}
registerEnumType(AgentType, {
	name: 'AgentType',
});
