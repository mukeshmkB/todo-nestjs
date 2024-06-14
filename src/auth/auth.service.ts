import { Injectable } from '@nestjs/common';
import { AuthUser } from './entity/auth.entity';
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

   constructor(@InjectRepository(AuthUser) private authRepository: Repository<AuthUser>){}

   async  LoginUser(authDto: AuthDto):Promise<any>{
      
    const {name, password} = authDto

       const user =  await this.authRepository.findOneBy({name})

       if(user){
          if(user.password === password){
            return {user: "Authenticated"}
          }
           
          return {user: "Enter Valid Password"}
       }

       return {user: "Enter Valid Name"}
    }
}
