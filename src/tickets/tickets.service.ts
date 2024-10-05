import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.entity';  
import { CreateTicketDto } from './dto/create-ticket.dto'; 


@Injectable()
export class TicketsService {
  private tickets = [
    { id: 1, customer: 'Cliente A', lastMsg: 'Olá', status: 'Aberto' },
    { id: 2, customer: 'Cliente B', lastMsg: 'Oi', status: 'Fechado' },
  ];

  findAll() {
    return this.tickets;
  }

  createTicket(createTicketDto: CreateTicketDto): Ticket {
    const { customer, lastMsg } = createTicketDto;

    const newTicket: Ticket = {
      id: this.tickets.length + 1, 
      customer,
      lastMsg,
      status: 'Aberto',  
    };

    this.tickets.push(newTicket);
    return newTicket;
  }

  toggleStatus(id: string) {
    const ticket = this.tickets.find(t => t.id === Number(id));
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    ticket.status = ticket.status === 'Aberto' ? 'Fechado' : 'Aberto';
    return ticket;
  }
}
