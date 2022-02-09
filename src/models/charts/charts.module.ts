import { Module } from '@nestjs/common';
import { ChartsController } from './charts.controller';
import { ChartsService } from './charts.service';
import { Chart } from './charts.schema';
import { ChartsResolver } from './charts.resolver';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([Chart])],
  controllers: [ChartsController],
  providers: [ChartsService, ChartsResolver],
})
export class ChartsModule {}
