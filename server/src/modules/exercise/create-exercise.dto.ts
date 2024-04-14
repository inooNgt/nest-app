// https://wdk-docs.github.io/nestjs-docs/docs/validator/class-validator/
import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateExerciseDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsInt()
  type: number;

  @IsNotEmpty()
  @IsString()
  options: string;

  @IsNotEmpty()
  @IsString()
  answer: string;

  @IsNotEmpty()
  @IsString()
  analysis: string;

  @IsOptional()
  @IsString()
  remarks: string;

  @IsOptional()
  @IsString()
  author: string;
}
