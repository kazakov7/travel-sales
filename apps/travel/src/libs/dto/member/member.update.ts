import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class UpdateMember {
	@Field({ nullable: true })
	@IsOptional()
	@IsNotEmpty()
	memberNick?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	memberFullName?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsEmail()
	memberEmail?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	memberPhone?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@MaxLength(500)
	memberDesc?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	memberImage?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	memberAddress?: string;
}
