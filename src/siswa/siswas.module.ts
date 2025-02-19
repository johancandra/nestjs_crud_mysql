import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiswasService } from './siswas.service';
import { SiswasController } from './siswas.controller';
import { Siswa } from './siswa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Siswa])],
  providers: [SiswasService],
  controllers: [SiswasController],
})
export class SiswasModule {}