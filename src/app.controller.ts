import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Get, Header, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  @Header('Content-Type', 'text/html')
  getHello(@Request() req): string { //TODO:  require an Bearer token, validate token
    return req.user;
    //return this.appService.getHello();
    //return {name:'Ei'};
  }
}
