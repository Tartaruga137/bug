import MovieService from '@api/services/MovieService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class MoviesController {
  private movieService: MovieService;

  constructor() {
    this.movieService = container.resolve(MovieService);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { image, name, description, actors, genre, release_date } =
      request.body;

    const movie = await this.movieService.createMovieService({
      image,
      name,
      description,
      actors,
      genre,
      release_date,
    });

    return response.json(movie);
  }
}
