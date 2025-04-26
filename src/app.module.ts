import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuController } from './menu/menu.controller';
import { ConfigurationController } from './configuration/configuration.controller';

@Module({
  imports: [],
  controllers: [AppController, MenuController, ConfigurationController],
  providers: [AppService],
})
export class AppModule {}
