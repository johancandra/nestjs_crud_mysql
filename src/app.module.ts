import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiswasController } from './siswa/siswas.controller';
import { SiswasModule } from './siswa/siswas.module';
import { AdminsController } from './admin/admins.controller';
import { AdminsModule } from './admin/admins.module';
const dbConfig = require("../ormconfig");

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), SiswasModule, AdminsModule],
})
export class AppModule {}