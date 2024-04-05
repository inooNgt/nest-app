import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { Exercise } from '../../entity/exercise.entity';

@Module({
  // forFeature()方法来定义哪个模型被注册在当前范围中
  imports: [TypeOrmModule.forFeature([Exercise])],
  controllers: [ExerciseController],
  providers: [ExerciseService, TypeOrmModule],
  exports: [ExerciseService],
})
export class ExerciseModule {}
