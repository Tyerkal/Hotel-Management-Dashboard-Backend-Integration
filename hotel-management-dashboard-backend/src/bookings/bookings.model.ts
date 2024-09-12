import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  hotelId: String,
  userId: String,
  bookingDate: Date,
  nights: Number,
});

export interface Booking extends mongoose.Document {
  id: string;
  hotelId: string;
  userId: string;
  bookingDate: Date;
  nights: number;
}
