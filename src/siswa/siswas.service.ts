import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Siswa } from './siswa.entity';

@Injectable()
export class SiswasService {
  constructor(
    @InjectRepository(Siswa)
    private siswasRepository: Repository<Siswa>,
  ) {}

  findAll(): Promise<Siswa[]> {
    return this.siswasRepository.find();
  }

  findById(id: string): Promise<Siswa[]> {
    return this.siswasRepository.findByIds([id]);
  }

  create(siswa: Siswa): Promise<Siswa> {
    return this.siswasRepository.save(siswa);
  }

  async update(id: number, siswa: Siswa): Promise<void> {
    await this.siswasRepository.update(id, siswa);
  }

  async remove(id: number): Promise<void> {
    await this.siswasRepository.delete(id);
  }
}