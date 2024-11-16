import { Controller, Get,Post , Delete,Body,Param} from '@nestjs/common';
import { AppService } from './app.service';
import {Stock} from "./schemas/stock.schema";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getStocks(): Promise<any> {
    console.log("AppController getStocks")
    return await this.appService.getStocks();
  }

  @Post('add')
  async addStock(
    @Body('name') name: string,
    @Body('symbol') symbol: string,
    @Body('currency') currency: string,
    @Body('stockExchange') stockExchange: string,
    @Body('exchangeShortName') exchangeShortName: string,
  ): Promise<Stock> {
    return this.appService.addStock({name, symbol, currency,stockExchange,exchangeShortName});
  }

  @Delete(':symbol')
  async removeStock(@Param('symbol') symbol: string): Promise<Stock> {
    return this.appService.removeStockByName(symbol);  
  }
}
