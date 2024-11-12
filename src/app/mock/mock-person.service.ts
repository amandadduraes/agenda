import { Injectable } from '@angular/core';
import { Person } from '../interface/types';

@Injectable({
  providedIn: 'root'
})
export class MockPersonService {
  private mockPeople: Person[] = [
    { name: 'Marie Dias', cpf: '111.111.111-99', email: 'mariedias@email.com', school: 'Escola Nacional', address: 'Uberlândia - MG', id:1 },
    { name: 'Dumbo Dias', cpf: '222.222.222-99', email: 'dumbodias@email.com', school: 'Escola Objetivo', address: 'São Paulo - SP', id:2 },
    { name: 'Alice Oliveira', cpf: '333.333.333-99', email: 'aliceoliveira@email.com', school: 'Escola Paschoal', address: 'Rio de Janeiro - Rio de Janeiro', id:3 },
  ];

  constructor() {}

  getPeople(): Person[] {
    return this.mockPeople;
  }
}
