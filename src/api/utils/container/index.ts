import MovieRepository from '@api/repository/MovieRepository';
import { container } from 'tsyringe';

container.registerSingleton<MovieRepository>(
  'MovieRepository',
  MovieRepository,
);
