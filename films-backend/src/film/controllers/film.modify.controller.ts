import { Controller, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { FilmService } from '../services/film.service';
import { CreateFilmDTO } from '../dto/create-film.dto';

@Controller('api/v1/film')
export class FilmModifyController {
  constructor(private filmService: FilmService) {}

  /**
   * Description: POST method to create film entity.
   * Input: CreateFilmDTO
   * Output: {message: "success/Error", "film": {object<Film>}}
   */
  @Post('/create')
  async addFilm(@Res() res, @Body() createFilmDTO: CreateFilmDTO) {
    const newFilm = await this.filmService.addFilm(createFilmDTO);
    if (newFilm) {
      return res.status(HttpStatus.OK).json({
        message: 'Film has been submitted successfully!',
        film: newFilm,
      });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error with create API! Please try again..',
        film: createFilmDTO,
      });
    }
  }
}
