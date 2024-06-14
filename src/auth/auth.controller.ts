import { Body, Controller, Post} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
 
    constructor(private authService: AuthService){}

    @Post()
    LoginUser(@Body() authDto: AuthDto): Promise<any>{
         return this.authService.LoginUser(authDto);
    }
}
