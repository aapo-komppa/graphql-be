import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateChartsDto } from './charts.dto';
import { Chart } from './charts.schema';
import { ChartsService } from './charts.service';

@Controller('charts')
export class ChartsController {
  constructor(private chartsService: ChartsService) {}

  @Get()
  async getCats(): Promise<Chart[] | null> {
    return await this.chartsService.list({});
  }

  @Post()
  async create(@Body() createChartsDto: CreateChartsDto): Promise<Chart> {
    return await this.chartsService.create(createChartsDto);
  }
}
