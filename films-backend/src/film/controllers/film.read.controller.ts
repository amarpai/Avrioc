/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { FilmService } from '../services/film.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('films')
export class FilmReadController {
  constructor(private filmService: FilmService) {}

  /**
   * Description: GET method to fetch all films from DB
   * Input: NA
   * Output: Array of objects<Film>
   */
  @Get('/')
  async getFilms(@Res() res) {
    const films = await this.filmService.getFilms();
    return res.status(HttpStatus.OK).json(films);
  }

  /**
   * Description: GET method to fetch single film object based on ID
   * Input: FilmID
   * Output: single objects<Film>
   */
  @Get('/:filmID')
  async getFilm(@Res() res, @Param('filmID', new ValidateObjectId()) filmID) {
    const film = await this.filmService.getFilm(filmID);
    if (!film) {
      throw new NotFoundException('Film does not exist!');
    }
    return res.status(HttpStatus.OK).json(film);
  }
}
