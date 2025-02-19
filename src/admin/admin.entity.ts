import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  user: string;

  @Column()
  password: string;
}