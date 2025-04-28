import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuController } from './menu/menu.controller';
import { ConfigurationController } from './configuration/configuration.controller';
import { OrderController } from './order/order.controller';
import { MenuService } from './menu/menu.service';
import { OrderService } from './order/order.service';



@Module({
  imports: [],
  controllers: [AppController, MenuController, ConfigurationController, OrderController],
  providers: [AppService, MenuService, OrderService],
})
export class AppModule {}
