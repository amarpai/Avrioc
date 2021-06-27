/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const min = [
  1,
  'The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).',
];
const max = [
  5,
  'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).',
];

export const FilmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  rating: { type: Number, min: min, max: max, required: true },
  ticket_price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
      required: true,
    },
  ],
  photo: {
    type: String,
    required: true,
  },
  comments: [{ name: String, comment: String }],
});
