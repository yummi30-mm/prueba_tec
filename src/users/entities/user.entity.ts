import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'CLIENT' }) // Aquí manejamos los roles ADMIN y CLIENT
  role: string;

  @Column({ default: true })
  activo: boolean; // Para la eliminación lógica
}