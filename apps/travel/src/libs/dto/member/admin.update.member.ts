import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsNotEmpty, IsEmail, MaxLength, isNotEmpty } from 'class-validator';
import { MemberType, MemberStatus, AgentType } from '../../enums/member.enum';

@InputType()
export class AdminUpdateMemberInput {
	@IsNotEmpty()
	@Field(() => String)
	_id: String;

	@Field(() => MemberType, { nullable: true })
	@IsOptional()
	memberType?: MemberType;

	@Field(() => MemberStatus, { nullable: true })
	@IsOptional()
	memberStatus?: MemberStatus;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	memberNick?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
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

	// Agent
	@Field(() => AgentType, { nullable: true })
	@IsOptional()
	agentType?: AgentType;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	agentCompanyName?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	agentBusinessNumber?: string;

	@Field({ nullable: true })
	@IsOptional()
	agentVerified?: boolean;

	// Moderation
	@Field({ nullable: true })
	@IsOptional()
	memberWarnings?: number;

	@Field({ nullable: true })
	@IsOptional()
	memberBlocks?: number;
}
