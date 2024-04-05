import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async signIn(userLoginId, pass) {
    console.log('usersService', this.usersService);
    const user = await this.usersService.findOne(userLoginId);
    if (user?.password !== pass) {
      throw new UnauthorizedException('用户名或密码错误');
    }
    const payload = {
      username: user.username,
      id: user.id,
    };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
