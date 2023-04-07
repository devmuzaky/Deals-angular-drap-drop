import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealCard } from './deal-card';

describe('IssueCardComponent', () => {
  let component: DealCard;
  let fixture: ComponentFixture<DealCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
