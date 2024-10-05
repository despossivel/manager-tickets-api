import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateTicketDto, TicketDto } from './dto/ticket.dto';
import { Ticket } from './ticket.entity';  

@ApiTags('tickets')  
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  @ApiOperation({ summary: 'List all tickets' }) 
  @ApiResponse({
    status: 200,
    description: 'The list of tickets has been successfully retrieved.',
    type: [TicketDto],
  }) 
  getAllTickets() {
    return this.ticketsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new ticket' })  
  @ApiBody({ type: CreateTicketDto }) 
  @ApiResponse({
    status: 201,
    description: 'Ticket created successfully.',
    type: Ticket,  
  })
  @ApiResponse({ status: 400, description: 'Invalid data.' })
  createTicket(@Body() createTicketDto: CreateTicketDto): Ticket {
    return this.ticketsService.createTicket(createTicketDto);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Change the status of a ticket' })
  @ApiParam({ name: 'id', description: 'Ticket ID to be updated' })
  updateTicketStatus(@Param('id') id: string) {
    return this.ticketsService.toggleStatus(id);
  }
}
