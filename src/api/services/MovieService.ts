import Movie from '@api/entities/Movie';
import MovieRepository from '@api/repository/MovieRepository';
import AppError from '@api/utils/errors/AppError';

export interface ICreateMovie {
  image: string;
  name: string;
  description: string;
  actors: string[];
  genre: string;
  release_date: Date;
}

interface IMovieId {
  id: number;
}

interface IUpdateMovie {
  id: number;
  image: string;
  name: string;
  description: string;
  actors: string[];
  genre: string;
  release_date: Date;
}

class MovieService {
  private movieRepository = new MovieRepository();

  public async createMovieService({
    image,
    name,
    description,
    actors,
    genre,
    release_date,
  }: ICreateMovie): Promise<Movie> {
    const movieExists = await this.movieRepository.findByName(name);

    if (movieExists) {
      throw new AppError('Movie already exists.');
    }

    const movie = await this.movieRepository.create({
      image,
      name,
      description,
      actors,
      genre,
      release_date,
    });

    return movie;
  }

  public async deleteMovieService({ id }: IMovieId): Promise<void> {
    const movie = await this.movieRepository.findById(id);

    if (!movie) {
      throw new AppError('Movie not found.');
    }

    await this.movieRepository.remove(movie);
  }

  public async listMovieService(): Promise<Movie[]> {
    const movies = await this.movieRepository.findAll();
    return movies;
  }

  public async showMovieService({ id }: IMovieId): Promise<Movie> {
    const movie = await this.movieRepository.findById(id);

    if (!movie) {
      throw new AppError('Movie not found.');
    }

    return movie;
  }

  public async updateMovieService({
    id,
    image,
    name,
    description,
    actors,
    genre,
    release_date,
  }: IUpdateMovie): Promise<Movie> {
    const movie = await this.movieRepository.findById(id);

    if (!movie) {
      throw new AppError('Movie not found.');
    }

    const movieExistsName = await this.movieRepository.findByName(name);

    if (movieExistsName && movie.name !== name) {
      throw new AppError('There is already one movie with this name.');
    }

    movie.image = image;
    movie.name = name;
    movie.description = description;
    movie.actors = actors;
    movie.genre = genre;
    movie.release_date = release_date;

    await this.movieRepository.save(movie);

    return movie;
  }
}

export default MovieService;
