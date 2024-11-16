import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from "./config/keys"
import { StockSchema,Stock } from './schemas/stock.schema';

@Module({
  imports: [
    MongooseModule.forRoot(`${config.mongoConnectionString}the5ersDB`),
    MongooseModule.forFeature([{ name: "Stock", schema: StockSchema }]),

  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
