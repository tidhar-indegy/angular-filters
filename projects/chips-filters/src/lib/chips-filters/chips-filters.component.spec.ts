import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsFiltersComponent } from './chips-filters.component';

describe('ChipsFiltersComponent', () => {
  let component: ChipsFiltersComponent;
  let fixture: ComponentFixture<ChipsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
