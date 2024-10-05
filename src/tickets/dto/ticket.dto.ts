import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
 
 
import {
  Historic
} from "../ticket.entity"


export class TicketDto {
  @ApiProperty({ description: 'The unique identifier of the ticket' })
  id: string;

  @ApiProperty({ description: 'The title of the ticket' })
  title: string;

  @ApiProperty({ description: 'The current status of the ticket' })
  status: string;

  @ApiProperty({ description: 'The history of changes or messages in the ticket' })
  historic: { from: string; msg: string }[];
}

export class CreateTicketDto {
  @ApiProperty({ example: 'Cliente A', description: 'Nome do cliente' })
  @IsString()
  @IsNotEmpty()
  customer: string;

  @ApiProperty({ example: 'Aberto', description: 'Status do ticket' })
  @IsString()
  @IsNotEmpty()
  status: string;
}


export class UpdateTicketDto {
  @ApiProperty({ example: 'Customer A', description: 'Customer name', required: false })
  @IsString()
  @IsOptional()
  customer?: string;

  @ApiProperty({ example: 'Historic', description: 'Historic of messages', required: false })
  @IsString()
  @IsOptional()
  historic?: Historic[];

  @ApiProperty({ example: 'Closed', description: 'Ticket status', required: false })
  @IsString()
  @IsOptional()
  status?: string;
}

