// import { UsuarioModule } from './usuario/usuario.module';
// import { UsuarioService } from './usuario/usuario.service';
// import { UsuarioController } from './usuario/usuario.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  // imports: [UsuarioModule],
  imports: [UsuarioModule],
  // controllers: [UsuarioController, AppController],
  controllers: [AppController],
  // providers: [UsuarioService, AppService],
  providers: [AppService],
})
export class AppModule {}
