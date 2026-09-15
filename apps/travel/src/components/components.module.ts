import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { HotelModule } from './hotel/hotel.module';
import { TourModule } from './tour/tour.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { CommentModule } from './comment/comment.module';
import { ArticleModule } from './article/article.module';

@Module({
	imports: [MemberModule, AuthModule, HotelModule, TourModule, LikeModule, ViewModule, CommentModule, ArticleModule],
})
export class ComponentsModule {}
