import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ExerciseService } from './exercise.service';
import { Exercise } from '../../interfaces/exercise.interface';
import { CreateExerciseDto } from './create-exercise.dto';
import { ValidationPipe } from '../../pipes/validate.pipe';

@ApiTags('exercise api')
@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  @Post()
  @ApiOperation({ summary: '创建题目' })
  async create(
    @Body(new ValidationPipe()) dto: CreateExerciseDto,
  ): Promise<Exercise> {
    console.log('ExerciseController create', dto);
    let data;
    try {
      data = await this.exerciseService.create(dto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return data;
  }

  @ApiOperation({ summary: '获取题目列表' })
  @Get()
  async findAll(): Promise<Exercise[]> {
    let data;
    try {
      data = await this.exerciseService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return data;
  }
}
