import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TicketsService } from './../src/tickets/tickets.service';


describe('TicketsController (e2e)', () => {
  let app: INestApplication;
  let ticketsService: TicketsService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    ticketsService = app.get<TicketsService>(TicketsService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('/tickets (GET) - must return all tickets', async () => {
    const response = await request(app.getHttpServer()).get('/tickets').expect(200);
    
    expect(response.body.length).toBe(2);  
    expect(response.body[0]).toHaveProperty('cliente', 'Cliente A');
    expect(response.body[1]).toHaveProperty('status', 'Fechado');
  });

  it('/tickets/:id/status (PATCH) - must toggle ticket status', async () => {
 
    const response1 = await request(app.getHttpServer())
      .patch('/tickets/1/status')
      .expect(200);

    expect(response1.body.status).toBe('Fechado');
 
    const response2 = await request(app.getHttpServer())
      .patch('/tickets/1/status')
      .expect(200);

    expect(response2.body.status).toBe('Aberto');
  });

  it('/tickets/:id/status (PATCH) - should return 404 if ticket is not found', async () => {
    await request(app.getHttpServer())
      .patch('/tickets/999/status') 
      .expect(404);
  });
});