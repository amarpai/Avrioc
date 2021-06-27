import { Test, TestingModule } from '@nestjs/testing';
import { FilmModifyController } from './film.modify.controller';

describe('FilmController', () => {
  let controller: FilmModifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmModifyController],
    }).compile();

    controller = module.get<FilmModifyController>(FilmModifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
