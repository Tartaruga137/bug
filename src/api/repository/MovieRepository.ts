import { Repository } from 'typeorm';
import Movie from '../entities/Movie';
import { dataSource } from 'src/database';
import { ICreateMovie } from '@api/services/MovieService';

class MovieRepository {
  private ormRepository: Repository<Movie>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Movie);
  }

  public async create({
    image,
    name,
    description,
    actors,
    genre,
    release_date,
  }: ICreateMovie): Promise<Movie> {
    const movie = this.ormRepository.create({
      image,
      name,
      description,
      actors,
      genre,
      release_date,
    });

    await this.ormRepository.save(movie);

    return movie;
  }

  public async save(movie: Movie): Promise<Movie> {
    await this.ormRepository.save(movie);

    return movie;
  }

  public async remove(movie: Movie): Promise<void> {
    await this.ormRepository.remove(movie);
  }

  public async findAll(): Promise<Movie[]> {
    const movies = await this.ormRepository.find();
    return movies;
  }

  public async findByName(name: string): Promise<Movie | null> {
    const movie = await this.ormRepository.findOneBy({
      name,
    });
    return movie;
  }

  public async findById(id: number): Promise<Movie | null> {
    const movie = await this.ormRepository.findOneBy({
      id,
    });
    return movie;
  }
}

export default MovieRepository;
