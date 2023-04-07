import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor() {
  }

  getDeals() {
    return [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: '',
        phone: '123-456-7890',
        company: 'ABC Company',
        status: 'New',
        date: '2019-01-01',
        probability_status: 'Low',
        state: 'New'
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: '',
        phone: '123-456-7890',
        company: 'ABC Company',
        status: 'New',
        date: '2019-01-01',
        probability_status: 'Low',
        state: 'New'
      },
      {
        id: 3,
        first_name: 'John',
        last_name: 'Smith',
        email: '',
        phone: '123-456-7890',
        company: 'ABC Company',
        status: 'New',
        date: '2019-01-01',
        probability_status: 'Low',
        state: 'New'
      },
      {
        id: 4,
        first_name: 'Jane',
        last_name: 'Smith',
        email: '',
        phone: '123-456-7890',
        company: 'ABC Company',
        status: 'New',
        date: '2019-01-01',
        probability_status: 'Low',
        state: 'New'
      },
      {
        id: 5,
        first_name: 'John',
        last_name: 'Doe',
        email: '',
        phone: '123-456-7890',
        company: 'ABC Company',
        status: 'New',
        date: '2019-01-01',
        probability_status: 'Low',
        state: 'New'
      },
      {
        id: 6,
        first_name: 'Jane',
        last_name: 'Doe',
        email: '',
        phone: '123-456-7890',
        company: 'ABC Company',
        status: 'New',
        date: '2019-01-01',
        probability_status: 'Low',
        state: 'New'
      }

    ]
  }
}
