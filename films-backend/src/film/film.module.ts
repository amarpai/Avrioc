import { Module } from '@nestjs/common';
import { FilmService } from './services/film.service';
import { FilmModifyController } from './controllers/film.modify.controller';
import { FilmReadController } from './controllers/film.read.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema } from './schemas/film.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }])],
  providers: [FilmService],
  controllers: [FilmModifyController, FilmReadController],
})
export class FilmModule {}
