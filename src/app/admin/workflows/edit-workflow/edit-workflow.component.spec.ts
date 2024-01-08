import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkflowComponent } from './edit-workflow.component';

describe('EditWorkflowComponent', () => {
  let component: EditWorkflowComponent;
  let fixture: ComponentFixture<EditWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditWorkflowComponent]
    });
    fixture = TestBed.createComponent(EditWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
