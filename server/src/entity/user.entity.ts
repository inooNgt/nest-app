import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  Unique,
} from 'typeorm';

@Unique(['userLoginId', 'userphone'])
@Entity('users')
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  userphone: string;

  @Column()
  userLoginId: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createTime: Date;
}
