import Sessions from '@api/entities/Session';
import { DataSource } from 'typeorm';
import { CreateSessions1717591076537 } from './migrations/1717591076537-CreateSessions';
import Movie from '@api/entities/Movie';
import { CreateMovie1717635322407 } from './migrations/1717635322407-CreateMovie';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'src/database/compacine.sqlite',
  entities: [Sessions, Movie],
  migrations: [CreateSessions1717591076537, CreateMovie1717635322407],
  synchronize: true,
});

export { dataSource };
