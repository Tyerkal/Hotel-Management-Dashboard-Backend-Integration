import * as mongoose from 'mongoose';

export const HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  roomsAvailable: Number,
  pricePerNight: Number,
});

export interface Hotel extends mongoose.Document {
  id: string;
  name: string;
  location: string;
  roomsAvailable: number;
  pricePerNight: number;
}
