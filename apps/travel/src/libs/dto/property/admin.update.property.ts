import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsEnum, IsString, MaxLength } from 'class-validator';
import { PropertyStatus } from '../../enums/property.enum';

@InputType()
export class AdminUpdatePropertyInput {
	@Field(() => PropertyStatus, { nullable: true })
	@IsOptional()
	@IsEnum(PropertyStatus)
	propertyStatus?: PropertyStatus;
}
