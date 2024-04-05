import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  content: string;
}
