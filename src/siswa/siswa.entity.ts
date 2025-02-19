import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Siswa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nama: string;

  @Column()
  kelas: string;

  @Column()
  alamat: string;
}