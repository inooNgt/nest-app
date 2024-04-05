import { IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  answer: string;

  @IsString()
  options: string;

  @IsString()
  content: string;
}
