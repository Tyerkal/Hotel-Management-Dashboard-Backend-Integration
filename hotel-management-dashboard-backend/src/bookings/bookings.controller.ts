import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Get()
  async getAllBookings() {
    return this.bookingsService.findAll();
  }

  @Post()
  async createBooking(@Body() createBookingDto: any) {
    return this.bookingsService.create(createBookingDto);
  }
}
