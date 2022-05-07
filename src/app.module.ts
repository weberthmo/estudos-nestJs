// import { UsuarioModule } from './usuario/usuario.module';
// import { UsuarioService } from './usuario/usuario.service';
// import { UsuarioController } from './usuario/usuario.controller';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FitroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
// import { AllExceptionsFilter } from './exception.filter';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  // imports: [UsuarioModule],
  imports: [UsuarioModule],
  // controllers: [UsuarioController, AppController],
  controllers: [],
  // providers: [UsuarioService, AppService],
  providers: [
    {provide: APP_FILTER,
    useClass: FitroDeExcecaoHttp}, //provedor responsavel por tratar mensagens de erro

    // AppService
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor //interceptar tranações  de saida, pipes intercepitam somente na entrada
    }
  ],
})
export class AppModule {}
