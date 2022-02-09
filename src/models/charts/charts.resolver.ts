import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Chart } from './charts.schema';
import { ChartsService } from './charts.service';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateChartsDto, ListChartsDto, UpdateChartsDto } from './charts.dto';

@Resolver()
export class ChartsResolver {
  constructor(private chartService: ChartsService) {}

  @Query(() => Chart)
  async person(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.chartService.getById(_id);
  }

  @Query(() => [Chart])
  async persons(@Args('filters', { nullable: true }) filters?: ListChartsDto) {
    return this.chartService.list(filters);
  }

  @Mutation(() => Chart)
  async createPerson(@Args('payload') payload: CreateChartsDto) {
    return this.chartService.create(payload);
  }

  @Mutation(() => Chart)
  async updatePerson(@Args('payload') payload: UpdateChartsDto) {
    return this.chartService.update(payload);
  }

  @Mutation(() => Chart)
  async deletePerson(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.chartService.delete(_id);
  }
}
