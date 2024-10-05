import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import {
  Historic
} from "../ticket.entity"

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
