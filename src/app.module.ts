import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entity/todo.entity';
import { AuthUser } from './auth/entity/auth.entity';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mukesh03',
      database: 'nestjs',
      entities: [Todo, AuthUser],
      synchronize: true,
    }),
     TodoModule,
     AuthModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
