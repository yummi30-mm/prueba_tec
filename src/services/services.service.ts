import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { MedicalService } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(MedicalService)
    private readonly serviceRepository: Repository<MedicalService>,
  ) {}

  async findByDateRange(startDate: Date, endDate: Date) {
    return await this.serviceRepository.find({
      where: {
        fecha_disponible: Between(startDate, endDate),
        activo: true, 
      },
    });
  }

  async softDelete(id: number) {
    return await this.serviceRepository.update(id, { activo: false });
  }
}