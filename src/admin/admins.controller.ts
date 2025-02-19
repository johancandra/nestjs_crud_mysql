import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Admin } from './admin.entity';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Admin[]> {
    return this.adminsService.findById(id);
  }

  @Post()
  create(@Body() admins: Admin): Promise<Admin> {
    return this.adminsService.create(admins);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() admins: Admin): Promise<void> {
    return this.adminsService.update(id, admins);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.adminsService.remove(id);
  }
}