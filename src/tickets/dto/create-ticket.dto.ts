import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty({ example: 'Cliente A', description: 'Nome do cliente' })
  @IsString()
  @IsNotEmpty()
  customer: string;

  @ApiProperty({ example: 'Olá, preciso de ajuda.', description: 'Última mensagem recebida' })
  @IsString()
  @IsNotEmpty()
  lastMsg: string;

  @ApiProperty({ example: 'Aberto', description: 'Status do ticket' })
  @IsString()
  @IsNotEmpty()
  status: string;
}

