import {Component, OnInit} from '@angular/core';
import {DealsModel} from "../interfaces/deals-model";

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.scss']
})
export class BoardComponentComponent implements OnInit{

  lanes: DealsModel[] = [
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
    ]

  constructor() { }

  ngOnInit() {

  }


}
