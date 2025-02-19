import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.find();
  }

  findById(id: string): Promise<Admin[]> {
    return this.adminsRepository.findByIds([id]);
  }

  create(admin: Admin): Promise<Admin> {
    return this.adminsRepository.save(admin);
  }

  async update(id: number, admin: Admin): Promise<void> {
    await this.adminsRepository.update(id, admin);
  }

  async remove(id: number): Promise<void> {
    await this.adminsRepository.delete(id);
  }
}