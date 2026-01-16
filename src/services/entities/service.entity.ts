import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('servicios_medicos') 
export class MedicalService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string; 

  @Column({ nullable: true })
  descripcion: string; 

  @Column('decimal', { precision: 10, scale: 2 })
  costo: number; 

  @Column()
  duracion: number; 

  @Column({ type: 'timestamp' })
  fecha_disponible: Date; 

  @Column({ default: true })
  activo: boolean; 
}