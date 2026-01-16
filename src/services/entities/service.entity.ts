import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paciente: string;

  @Column()
  servicio: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column()
  fecha_servicio: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  monto: number;

  @Column({ default: true })
  activo: boolean;
}
