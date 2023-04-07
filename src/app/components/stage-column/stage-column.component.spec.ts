import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageColumnComponent } from './stage-column.component';

describe('BoardListComponent', () => {
  let component: StageColumnComponent;
  let fixture: ComponentFixture<StageColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
