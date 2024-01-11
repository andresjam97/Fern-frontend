import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDialogsComponent } from './forms-dialogs.component';

describe('FormsDialogsComponent', () => {
  let component: FormsDialogsComponent;
  let fixture: ComponentFixture<FormsDialogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsDialogsComponent]
    });
    fixture = TestBed.createComponent(FormsDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
