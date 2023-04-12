import {Component, Input, ViewEncapsulation} from '@angular/core';
import {EMPTY_STAGE, StageModel} from "../../interfaces/stage-model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {DealsModel, EMPTY_DEAL} from "../../interfaces/deals-model";
import {DealsService} from "../../services/deals/deals.service";

@Component({
  selector: 'stage-column',
  templateUrl: './stage-column.component.html',
  styleUrls: ['./stage-column.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StageColumnComponent {
  @Input() stage: StageModel = EMPTY_STAGE
  protected readonly EMPTY_DEAL = EMPTY_DEAL;

  constructor(private dealsService: DealsService) {
  }

  drop(event: CdkDragDrop<DealsModel[]>) {
    let isMovingInsideTheSameList = event.previousContainer === event.container;
    if (isMovingInsideTheSameList) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      this.dealsService.updateStatus(event.container.data[event.currentIndex].id, event.container.id)
        .subscribe((data) => console.log(data))
    }
  }
}
