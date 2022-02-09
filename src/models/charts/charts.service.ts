import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { Schema as MongooseSchema } from 'mongoose';

import { Chart } from './charts.schema';
import { CreateChartsDto, ListChartsDto, UpdateChartsDto } from './charts.dto';

@Injectable()
export class ChartsService {
  constructor(
    @InjectModel(Chart) private chartsModel: ReturnModelType<typeof Chart>,
  ) {}

  async create(createChartsDto: CreateChartsDto) {
    const createdCharts = new this.chartsModel(createChartsDto);
    return await createdCharts.save();
  }

  async getById(_id: MongooseSchema.Types.ObjectId) {
    return await this.chartsModel.findById(_id).exec();
  }

  async list(filters: ListChartsDto) {
    return await this.chartsModel.find({ ...filters }).exec();
  }

  async update(payload: UpdateChartsDto) {
    return await this.chartsModel
      .findByIdAndUpdate(payload._id, payload, {
        new: true,
      })
      .exec();
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.chartsModel.findByIdAndDelete(_id).exec();
  }
}
