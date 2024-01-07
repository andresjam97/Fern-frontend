import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsListComponent } from './worflows-list.component';

describe('WorflowsListComponent', () => {
  let component: WorkflowsListComponent;
  let fixture: ComponentFixture<WorkflowsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WorkflowsListComponent]
    });
    fixture = TestBed.createComponent(WorkflowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
