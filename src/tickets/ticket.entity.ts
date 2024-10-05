export class Ticket {
  id: number;
  customer: string;
  historic: Historic[];
  status: 'Aberto' | 'Fechado';
}


export class Historic {
  from: string
  msg: string
}
