// import { NestFactory } from '@nestjs/core';
import { CommandFactory } from 'nest-commander';
// import { AppModule } from './app.module';
import { CommandModule } from './command.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  await CommandFactory.run(CommandModule);
}
bootstrap();
