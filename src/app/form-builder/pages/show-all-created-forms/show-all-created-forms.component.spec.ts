import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCreatedFormsComponent } from './show-all-created-forms.component';

describe('ShowAllCreatedFormsComponent', () => {
  let component: ShowAllCreatedFormsComponent;
  let fixture: ComponentFixture<ShowAllCreatedFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllCreatedFormsComponent]
    });
    fixture = TestBed.createComponent(ShowAllCreatedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
