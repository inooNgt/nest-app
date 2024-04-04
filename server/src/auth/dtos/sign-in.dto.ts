import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ description: '用户名', type: String })
  userLoginId: string;
  @ApiProperty({ description: '密码', type: String })
  @ApiProperty()
  password: string;
}
