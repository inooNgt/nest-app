import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './config/index';
import { MyNamingStrategy } from './config/naming-strategy';
import { User } from './entity/user.entity';
import { Post } from './entity/post.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      ...dbconfig,
      entities: [User, Post],
      namingStrategy: new MyNamingStrategy(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
