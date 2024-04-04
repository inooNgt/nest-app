import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Request,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from '../interfaces/post.interface';
// import { ValidationPipe } from './validate.pipe';
import { CreatePostDto } from './create-post.dto';
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  async findAll(): Promise<Posts[]> {
    let data;
    try {
      data = await this.postsService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return data;
  }
  @Post()
  async create(@Body() createPostDto: CreatePostDto, @Req() request: Request) {
    console.log('request: ', request.body);
    console.log('createPostDto: ', createPostDto);
    try {
      this.postsService.create(createPostDto);
    } catch (error) {
      return error;
    }
  }
}
