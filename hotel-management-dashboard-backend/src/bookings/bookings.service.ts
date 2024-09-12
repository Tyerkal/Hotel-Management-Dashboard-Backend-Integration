import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './bookings.model';

@Injectable()
export class BookingsService {
  constructor(@InjectModel('Booking') private bookingModel: Model<Booking>) {}

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }

  async create(createBookingDto: any): Promise<Booking> {
    const newBooking = new this.bookingModel(createBookingDto);
    return newBooking.save();
  }
}
