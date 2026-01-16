import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Punto 1: Registro de usuario con estrategia de cifrado
  async register(email: string, pass: string, role: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);
    return this.usersService.create({
      email,
      password: hashedPassword,
      role,
    });
  }

  // Validación para el Login
  async login(email: string, pass: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const payload = { sub: user.id, email: user.email, role: user.role };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }
}