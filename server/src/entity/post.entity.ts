import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('posts_info')
export class Post {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createTime: Date;
}
