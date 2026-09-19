import { registerEnumType } from '@nestjs/graphql';

export enum ChatType {
	PRIVATE = 'PRIVATE',
	GLOBAL = 'GLOBAL',
}
registerEnumType(ChatType, { name: 'ChatType' });
