/* eslint-disable prettier/prettier */
export class CreateFilmDTO {
  readonly name: string;
  readonly description: string;
  readonly release_date: string;
  readonly rating: number;
  readonly ticket_price: number;
  readonly country: string;
  readonly genre: [string];
  readonly photo: string;
  readonly comments: [{ name: string; comment: string }];
}
