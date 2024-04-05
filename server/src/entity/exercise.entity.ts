import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('exercise')
export class Exercise {
  @PrimaryColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  options: string;

  @Column()
  answer: string;

  @Column()
  analysis: string;

  @Column()
  remarks: string;

  @CreateDateColumn()
  createTime: Date;
}
