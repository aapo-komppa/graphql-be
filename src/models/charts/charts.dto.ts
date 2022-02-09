import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateChartsDto {
  @Field(() => String)
  name: string;

  @Field(() => [Number])
  values: number[];

  @Field(() => String)
  colour: string;
}

@InputType()
export class ListChartsDto {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [Number], { nullable: true })
  values?: number[];

  @Field(() => String, { nullable: true })
  colour?: string;
}

@InputType()
export class UpdateChartsDto {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [Number], { nullable: true })
  values?: number[];

  @Field(() => String, { nullable: true })
  colour?: string;
}
