import { Repository } from 'typeorm';
import Ticket from '../entities/Ticket';
import { dataSource } from 'src/database';
import { ICreateTicket } from '@api/services/TicketService';

class TicketRepository {
  private ormRepository: Repository<Ticket>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Ticket);
  }

  public async create({
    id,
    session_id,
    chair,
    value,
  }: ICreateTicket): Promise<Ticket> {
    const ticket = this.ormRepository.create({
      id,
      session_id,
      chair,
      value,
    });

    await this.ormRepository.save(ticket);

    return ticket;
  }

  public async save(ticket: Ticket): Promise<Ticket> {
    await this.ormRepository.save(ticket);

    return ticket;
  }

  public async remove(ticket: Ticket): Promise<void> {
    await this.ormRepository.remove(ticket);
  }

  public async findAll(): Promise<Ticket[]> {
    const tickets = await this.ormRepository.find();
    return tickets;
  }

  public async findById(id: number): Promise<Ticket | null> {
    const ticket = await this.ormRepository.findOneBy({
      id,
    });
    return ticket;
  }
}

export default TicketRepository;
