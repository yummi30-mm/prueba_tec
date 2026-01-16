# API REST de Servicios Médicos

API REST desarrollada con **NestJS**, **TypeORM** y **PostgreSQL**, enfocada en la gestión de servicios médicos, seguridad por roles y buenas prácticas de desarrollo.
## Descripción
Esta API permite:
- Gestionar usuarios con roles `ADMIN` y `CLIENT`.
- Gestionar servicios médicos (`nombre`, `costo`, `duración`, `fecha_disponible`).
- Seguridad mediante **JWT**.
- Eliminación lógica para preservar historial de datos.
- Documentación de endpoints con **Swagger**.
- Configuración mediante **variables de entorno**.
- Validación de datos en requests usando **class-validator**.

## Tecnologías
- [NestJS](https://nestjs.com/) – Framework Node.js para APIs escalables.
- [TypeORM](https://typeorm.io/) – ORM para la base de datos PostgreSQL.
- [PostgreSQL](https://www.postgresql.org/) – Base de datos relacional.
- [Passport JWT](http://www.passportjs.org/packages/passport-jwt/) – Autenticación con tokens.
- [class-validator](https://github.com/typestack/class-validator) – Validación de DTOs.
- [Swagger](https://swagger.io/) – Documentación de API.
- dotenv – Manejo de variables de entorno.


## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/yummi30-mm/prueba_tec
cd nombre-repo
