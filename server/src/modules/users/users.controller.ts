import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from '../../interfaces/user.interface';

@ApiTags('用户相关')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: '获取用户列表' })
  @Get()
  async findAll(): Promise<User[]> {
    let data;
    try {
      data = await this.usersService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return data;
  }
}
