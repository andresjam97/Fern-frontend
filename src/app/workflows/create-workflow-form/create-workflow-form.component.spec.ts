import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkflowFormComponent } from './create-workflow-form.component';

describe('CreateWorkflowFormComponent', () => {
  let component: CreateWorkflowFormComponent;
  let fixture: ComponentFixture<CreateWorkflowFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWorkflowFormComponent]
    });
    fixture = TestBed.createComponent(CreateWorkflowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
