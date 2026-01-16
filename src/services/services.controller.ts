import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Roles } from '../auth/roles.decorator'; 
import { RolesGuard } from '../auth/roles.guard';  
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() data: any) {
    return this.servicesService.create(data);
  }

  @Get('search')
  searchByDate(@Query('start') start: string, @Query('end') end: string) {
    return this.servicesService.findByDateRange(new Date(start), new Date(end));
  }

  @Patch(':id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() data: any) {
    return this.servicesService.update(+id, data);
  }

  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.servicesService.softDelete(+id);
  }
}