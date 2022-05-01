import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateChartsDto {
  @IsString()
  @Field(() => String)
  name: string;

  @ArrayNotEmpty()
  @Field(() => [Number])
  values: number[];

  @IsString()
  @Field(() => String)
  colour: string;
}

@InputType()
export class ListChartsDto {
  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  name?: string;

  @ArrayNotEmpty()
  @IsOptional()
  @Field(() => [Number], { nullable: true })
  values?: number[];

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  colour?: string;
}

@InputType()
export class UpdateChartsDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  name?: string;

  @ArrayNotEmpty()
  @IsOptional()
  @Field(() => [Number], { nullable: true })
  values?: number[];

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  colour?: string;
}
