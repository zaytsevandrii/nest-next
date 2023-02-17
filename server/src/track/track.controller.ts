import { CreateTrackDto } from './dto/create.track.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }
  @Get()
  getAll() {
    return 'Work';
  }

  getOne() {}

  delete() {}
}
