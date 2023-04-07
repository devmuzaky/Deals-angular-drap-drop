import {Component, Input} from '@angular/core';
import {DealsModel, EMPTY_DEAL} from "../../interfaces/deals-model";

@Component({
  selector: 'deal-card',
  templateUrl: './deal-card.html',
  styleUrls: ['./deal-card.scss']
})
export class DealCard {
  @Input() deal: DealsModel = EMPTY_DEAL;
}
