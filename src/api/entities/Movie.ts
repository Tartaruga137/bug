import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import Session from './Session';

@Entity('movies')
class Movie {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('simple-array')
  actors: string[];

  @Column()
  genre: string;

  @Column({ type: 'date' })
  release_date: Date;

  @OneToMany(() => Session, session => session.movie, {
    cascade: true,
  })
  sessions: Session[];
}

export default Movie;
