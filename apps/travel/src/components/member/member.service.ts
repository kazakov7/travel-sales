import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from '../../libs/dto/member/member';
import { Model, Types } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { MemberInput } from '../../libs/dto/member/member.input';
import { Messages } from '../../libs/enums/common.enum';
@Injectable()
export class MemberService {
	constructor(
		@InjectModel('Member')
		private readonly memberModel: Model<Member>,
		private authService: AuthService,
	) {}

	public async signup(input: MemberInput): Promise<Member> {
		input.memberPassword = await this.authService.hashPassword(input.memberPassword!);
		try {
			const result = await this.memberModel.create(input);
			result.accessToken = await this.authService.createToken(result);
			return result;
		} catch (err) {
			// @ts-ignore
			console.log('Error, Service.model', err.message);
			throw new BadRequestException(Messages.DUPLICATE_DATA);
		}
	}
}
