import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { Admin } from './admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminsService],
  controllers: [AdminsController],
})
export class AdminsModule {}