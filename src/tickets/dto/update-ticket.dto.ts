import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateTicketDto {
  @ApiProperty({ example: 'Customer A', description: 'Customer name', required: false })
  @IsString()
  @IsOptional()
  customer?: string;

  @ApiProperty({ example: 'New message.', description: 'Last message received', required: false })
  @IsString()
  @IsOptional()
  lastMsg?: string;

  @ApiProperty({ example: 'Closed', description: 'Ticket status', required: false })
  @IsString()
  @IsOptional()
  status?: string;
}
