import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tickets')
class Tickets {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  session_id: number;

  @Column()
  chair: string;

  @Column()
  value: number;
}

export default Tickets;
