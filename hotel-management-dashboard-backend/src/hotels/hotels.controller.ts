import { Controller, Get, Post, Body } from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}

  @Get()
  async getAllHotels() {
    return this.hotelsService.findAll();
  }

  @Post()
  async createHotel(@Body() createHotelDto: any) {
    return this.hotelsService.create(createHotelDto);
  }
}
