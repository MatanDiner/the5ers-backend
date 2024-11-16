import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockSchema,Stock } from './schemas/stock.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel('Stock') private stockModel: Model<Stock>) {}


  async getStocks(): Promise<any> {
        console.log("AppService getStocks")

    return await this.stockModel.find().exec();
  }

  async addStock(stock:Stock): Promise<any> {
    const newStock = new this.stockModel(stock); 
    return await newStock.save();
  }

  async removeStockByName(symbol): Promise<any> {
    return await this.stockModel.deleteOne({ symbol }).exec();  
  }
}
