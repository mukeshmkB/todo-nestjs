import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthUser } from './entity/auth.entity';


@Module({
  imports: [TypeOrmModule.forFeature([AuthUser])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
