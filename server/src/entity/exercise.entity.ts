import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('exercise')
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    comment:
      '题目类型:1-言语理解与表达、2-数量关系、3-判断推理、4-常识判断、5-资料分析',
  })
  type: string;

  @Column({ comment: '题目内容', unique: true })
  content: string;

  @Column({})
  options: string;

  @Column({})
  answer: string;

  @Column({ nullable: true })
  analysis: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  remarks: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;
}
