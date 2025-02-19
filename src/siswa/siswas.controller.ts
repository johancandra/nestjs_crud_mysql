import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SiswasService } from './siswas.service';
import { Siswa } from './siswa.entity';

@Controller('siswas')
export class SiswasController {
  constructor(private readonly siswasService: SiswasService) {}

  @Get()
  findAll(): Promise<Siswa[]> {
    return this.siswasService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Siswa[]> {
    return this.siswasService.findById(id);
  }

  @Post()
  create(@Body() siswa: Siswa): Promise<Siswa> {
    return this.siswasService.create(siswa);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() siswa: Siswa): Promise<void> {
    return this.siswasService.update(id, siswa);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.siswasService.remove(id);
  }
}