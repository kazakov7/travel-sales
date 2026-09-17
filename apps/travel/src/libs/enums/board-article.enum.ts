import { registerEnumType } from '@nestjs/graphql';

export enum BoardArticleCategory {
	DESTINATION = 'DESTINATION',
	TRAVEL_TIPS = 'TRAVEL_TIPS',
	HOTEL = 'HOTEL',
	TOUR = 'TOUR',
	GUIDE = 'GUIDE',
	NEWS = 'NEWS',
}

registerEnumType(BoardArticleCategory, {
	name: 'BoardArticleCategory',
	description: 'Category of a community travel article',
});

export enum BoardArticleStatus {
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
}
registerEnumType(BoardArticleStatus, {
	name: 'BoardArticleStatus',
});
