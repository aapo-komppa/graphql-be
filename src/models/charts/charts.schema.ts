import { Prop } from '@typegoose/typegoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Chart {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => [Number])
  @Prop({ type: () => [Number] })
  values: number[];

  @Field(() => String)
  @Prop()
  colour: string;
}
