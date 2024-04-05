import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { Post } from '../../entity/post.entity';

@Module({
  // forFeature()方法来定义哪个模型被注册在当前范围中
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
