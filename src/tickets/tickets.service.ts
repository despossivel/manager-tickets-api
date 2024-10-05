import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';


@Injectable()
export class TicketsService {
  private tickets = [
    {
      id: 1, customer: 'Cliente A', status: 'Aberto', historic: [
        {
          from: 'system',
          msg: 'Oi, como posso ajuda-lo hoje?',
        },
        {
          from: 'user',
          msg: 'Oi, preciso de ajuda',
        },
      ]
    },
    {
      id: 2, customer: 'Cliente B', status: 'Fechado', historic: [
        {
          from: 'system',
          msg: 'Oi, como posso ajuda-lo hoje?',
        },
        {
          from: 'user',
          msg: 'Meu nome é cliente b',
        },
        {
          from: 'user',
          msg: 'e preciso de ajuda com meu ihpone',
        },
        {
          from: 'user',
          msg: 'lotem ipsum',
        },
        {
          from: 'system',
          msg: 'Aguarde um momento.',
        },
      ]
    },
    {
      id: 3, customer: 'Cliente C', status: 'Fechado', historic: [
        {
          from: 'system',
          msg: 'Oi, como posso ajuda-lo hoje?',
        },
        {
          from: 'user',
          msg: 'Oi, preciso de ajuda',
        },
      ]
    },
    {
      id: 4, customer: 'Cliente D', status: 'Fechado', historic: [
        {
          from: 'system',
          msg: 'Oi, como posso ajuda-lo hoje?',
        },
        {
          from: 'user',
          msg: 'Oi, preciso de ajuda',
        },
      ]
    },
  ];

  findAll() {
    return this.tickets;
  }

  createTicket(createTicketDto: CreateTicketDto): Ticket {
    const { customer } = createTicketDto;

    const newTicket: Ticket = {
      id: this.tickets.length + 1,
      customer,
      historic: [],
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
