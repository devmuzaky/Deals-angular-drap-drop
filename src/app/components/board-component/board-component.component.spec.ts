import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponentComponent } from './board-component.component';

describe('BoardComponentComponent', () => {
  let component: BoardComponentComponent;
  let fixture: ComponentFixture<BoardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
