import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ChartsModule } from './models/charts/charts.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongo:27017/${process.env.DB_NAME}`,
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    ChartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
