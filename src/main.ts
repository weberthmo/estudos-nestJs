import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))
  useContainer(app.select(AppModule), {fallbackOnErrors: true});//Nest invoca o useContainer e define container de injeção de dependencia para o Nest
  await app.listen(3000);
}
bootstrap();
