import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() data: any) {
    return this.servicesService.create(data);
  }

  @Get('search')
  searchByDate(@Query('start') start: string, @Query('end') end: string) {
    return this.servicesService.findByDateRange(new Date(start), new Date(end));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.servicesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.softDelete(+id);
  }
}