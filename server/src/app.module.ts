import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './config/index';
import { MyNamingStrategy } from './config/naming-strategy';
import { User,Post,Exercise } from "./entity/index";
@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostsModule,
    ExerciseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      ...dbconfig,
      entities: [User, Post,Exercise],
      namingStrategy: new MyNamingStrategy(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
