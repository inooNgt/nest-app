import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from '../../entity/user.entity';

@Module({
  // forFeature()方法来定义哪个模型被注册在当前范围中
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, TypeOrmModule],
  exports: [UsersService],
})
export class UsersModule {}
