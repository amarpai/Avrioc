/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Film extends Document {
  readonly name: string;
  readonly description: string;
  readonly release_date: string;
  readonly rating: number;
  readonly ticket_price: number;
  readonly country: string;
  readonly genre: [string];
  readonly photo: string;
  readonly comments: [{ name: string; comment: string }];
}
