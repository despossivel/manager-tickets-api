import { TicketsService } from './tickets.service';
import { NotFoundException } from '@nestjs/common';


describe('TicketsService', () => {
  let service: TicketsService;

  beforeEach(() => {
    service = new TicketsService();
  });

  it('must return all tickets', () => {
    const tickets = service.findAll();
    expect(tickets.length).toBe(2);
    expect(tickets[0]).toHaveProperty('customer', 'Cliente A');
    expect(tickets[1]).toHaveProperty('status', 'Fechado');
  });

  it('must toggle ticket status', () => {
    const ticket = service.toggleStatus('1');
    expect(ticket).toBeDefined();
    expect(ticket.status).toBe('Fechado');  
  });

  it('should toggle status again', () => {
    service.toggleStatus('1');  
    const ticket = service.toggleStatus('1'); 
    expect(ticket.status).toBe('Aberto');
  });

  it('should throw NotFoundException if ticket is not found', () => {
    expect(() => service.toggleStatus('999')).toThrow(NotFoundException);
  });
});
