import { IsString, IsInt, IsNotEmpty } from 'class-validator';

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

  @IsString()
  remarks: string;
}
