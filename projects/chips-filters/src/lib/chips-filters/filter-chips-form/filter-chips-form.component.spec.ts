import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChipsFormComponent } from './filter-chips-form.component';

describe('FilterChipsFormComponent', () => {
  let component: FilterChipsFormComponent;
  let fixture: ComponentFixture<FilterChipsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterChipsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterChipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
