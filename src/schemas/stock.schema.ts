import { Prop, Schema, SchemaFactory  } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StockDocument = HydratedDocument<Stock>;

@Schema({ collection: 'user_stocks' })
export class Stock {
  @Prop()
  symbol: string;

  @Prop()
  name: string;

  @Prop()
  currency: string;

  @Prop()
  stockExchange: string;

  @Prop()
  exchangeShortName: string;
}

export const StockSchema = SchemaFactory.createForClass(Stock);

// matand0390
// EJ43Vf2Yxqyi5AUi

