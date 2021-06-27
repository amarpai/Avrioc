import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Edited to avoid port conflict with React Application
  await app.listen(5000);
}

bootstrap();
