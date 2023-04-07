import {Component, Input, ViewEncapsulation} from '@angular/core';
import {EMPTY_STAGE, StageModel} from "../../interfaces/stage-model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {DealsModel} from "../../interfaces/deals-model";

@Component({
  selector: 'app-stage-column',
  templateUrl: './stage-column.component.html',
  styleUrls: ['./stage-column.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class StageColumnComponent {
  @Input() stage: StageModel = EMPTY_STAGE

  drop(event: CdkDragDrop<DealsModel[]>) {
    let isMovingInsideTheSameList = event.previousContainer === event.container;
    if (isMovingInsideTheSameList) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
