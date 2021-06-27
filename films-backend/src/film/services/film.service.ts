/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Film } from '../interfaces/film.interface';
import { CreateFilmDTO } from '../dto/create-film.dto';

@Injectable()
export class FilmService {
  constructor(@InjectModel('Film') private readonly filmModel: Model<Film>) {}

  async addFilm(createFilmDTO: CreateFilmDTO): Promise<Film> {
    const newFilm = await this.filmModel.create(createFilmDTO);
    return newFilm.save();
  }

  async getFilm(filmID): Promise<Film> {
    const film = await this.filmModel.findById(filmID).exec();
    return film;
  }

  async getFilms(): Promise<Film[]> {
    const films = await this.filmModel.find().exec();
    return films;
  }
}
