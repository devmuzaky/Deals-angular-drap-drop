import {Component, OnInit} from '@angular/core';
import {DealsModel} from "../../interfaces/deals-model";
import {StageModel} from "../../interfaces/stage-model";


const stagesData: StageModel[] = [
  {
    id: '1',
    name: 'Potential Value',
    deals: [

    ]
  },
  {
    id: '2',
    name: 'Focus',
    deals: []
  },
  {
    id: '3',
    name: 'Contact Made',
    deals: []
  },
  {
    id: '4',
    name: 'Offer Sent',
    deals: [ {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'exaple@ex.com',
      phone: '123-456-7890',
      company: 'ABC Company',
      status: 'New',
      date: '2019-01-01',
      probability_status: '25%',
      state: 'New'
    },
      {
        id: 2,
        first_name: 'John',
        last_name: 'Doe',
        email: 'exaple@ex.com',
        phone: '123-456-7890',
        company: 'ABC Company',
        status: 'New',
        date: '2019-01-01',
        probability_status: '25%',
        state: 'New'
      },]
  },
  {
    id: '5',
    name: 'Getting Ready',
    deals: []
  }
]

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.scss']
})
export class BoardComponentComponent implements OnInit {


  stages: StageModel[] = stagesData;


  constructor() {
  }

  ngOnInit() {

  }


}
