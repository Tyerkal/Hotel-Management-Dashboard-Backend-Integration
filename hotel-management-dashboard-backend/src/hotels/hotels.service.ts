import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotels.model';

@Injectable()
export class HotelsService {
  constructor(@InjectModel('Hotel') private hotelModel: Model<Hotel>) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }

  async create(createHotelDto: any): Promise<Hotel> {
    const newHotel = new this.hotelModel(createHotelDto);
    return newHotel.save();
  }
}
