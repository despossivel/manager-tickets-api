import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/ticket.dto';
import { NotFoundException } from '@nestjs/common';

describe('TicketsService', () => {
  let service: TicketsService;

  beforeEach(() => {
    service = new TicketsService();
  });

  describe('findAll', () => {
    it('should return an array of tickets', () => {
      const result = service.findAll();
      expect(result).toHaveLength(4);  
      expect(result).toEqual(expect.arrayContaining([
        expect.objectContaining({ customer: 'Cliente A' }),
        expect.objectContaining({ customer: 'Cliente B' }),
      ]));
    });
  });

  describe('createTicket', () => {
    it('should create a new ticket and return it', () => {
      const createTicketDto: CreateTicketDto = { customer: 'Cliente E', status: 'Aberto' };
      const result = service.createTicket(createTicketDto);

      expect(result).toHaveProperty('id');
      expect(result.customer).toBe('Cliente E');
      expect(result.status).toBe('Aberto');
      expect(service.findAll()).toHaveLength(5); 
    });
  });

  describe('toggleStatus', () => {
    it('should toggle the status of an existing ticket', () => {
      const ticket = service.toggleStatus('1');  
      expect(ticket.status).toBe('Fechado'); 

      const ticketAfterToggle = service.toggleStatus('1');
      expect(ticketAfterToggle.status).toBe('Aberto');  
    });

    it('should throw a NotFoundException if the ticket does not exist', () => {
      expect(() => service.toggleStatus('999')).toThrow(NotFoundException);
    });
  });
});
