import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DealsModel} from "../../interfaces/deals-model";
import {StageModel} from "../../interfaces/stage-model";
import {DealsService} from "../../services/deals/deals.service";
import {debounceTime, distinctUntilChanged, EMPTY, fromEvent, map, merge, mergeAll, Observable, switchMap} from "rxjs";


@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.scss']
})
export class BoardComponentComponent implements OnInit, AfterViewInit {


  @ViewChild('input') input!: ElementRef;

  stages$: Observable<StageModel[]> = EMPTY;
  searchResult$: Observable<StageModel[]> = EMPTY;
  currentValues$: Observable<StageModel[]> = EMPTY;

  constructor(private dealService: DealsService) {
  }


  ngOnInit() {
    this.stages$ = this.dealService.getDeals();



  }

  ngAfterViewInit() {
    this.searchResult$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(map((event: any) => {
          return event.target.value;
        }), debounceTime(100),
        distinctUntilChanged(),
        switchMap((search: string): Observable<StageModel[]> => this.dealService.searchDeal(search)))

    this.currentValues$ = merge(this.stages$, this.searchResult$);
  }
}
