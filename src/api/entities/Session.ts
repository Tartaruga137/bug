import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Movie from './Movie';

@Entity('sessions')
class Sessions {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  room: string;

  @Column()
  capacity: number;

  @Column({
    type: 'date',
  })
  day: Date;

  @Column()
  time: string;

  @ManyToOne(() => Movie, movie => movie.sessions)
  movie: Movie;

  @Column()
  movie_id: number;
}

export default Sessions;
