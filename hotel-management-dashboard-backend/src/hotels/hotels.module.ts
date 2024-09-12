import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { HotelSchema } from './hotels.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
  ],
  providers: [HotelsService],
  controllers: [HotelsController],
})
export class HotelsModule {}
