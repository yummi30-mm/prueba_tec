import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { MedicalService } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(MedicalService)
    private readonly serviceRepository: Repository<MedicalService>,
  ) {}

  async create(data: Partial<MedicalService>) {
    const nuevo = this.serviceRepository.create(data);
    return await this.serviceRepository.save(nuevo);
  }

  async findByDateRange(start: Date, end: Date) {
    return await this.serviceRepository.find({
      where: {
        fecha_disponible: Between(start, end),
        activo: true,
      },
    });
  }

  async update(id: number, data: Partial<MedicalService>) {
    await this.serviceRepository.update(id, data);
    return this.findOne(id);
  }

  async softDelete(id: number) {
    return await this.serviceRepository.update(id, { activo: false });
  }

  async findOne(id: number) {
    const service = await this.serviceRepository.findOne({ where: { id, activo: true } });
    if (!service) throw new NotFoundException('Servicio no encontrado');
    return service;
  }
  
}