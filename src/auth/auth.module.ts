import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule, PassportModule.register({ session: true }), JwtModule.register({
    secret: 'SECRET',
    signOptions: { expiresIn: '60s' },
  })],
  providers: [AuthService, LocalStrategy, SessionSerializer, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
