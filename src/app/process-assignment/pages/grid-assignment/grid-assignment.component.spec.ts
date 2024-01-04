import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAssignmentComponent } from './grid-assignment.component';

describe('GridAssignmentComponent', () => {
  let component: GridAssignmentComponent;
  let fixture: ComponentFixture<GridAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridAssignmentComponent]
    });
    fixture = TestBed.createComponent(GridAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
