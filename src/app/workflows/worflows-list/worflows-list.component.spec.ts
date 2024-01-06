import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorflowsListComponent } from './worflows-list.component';

describe('WorflowsListComponent', () => {
  let component: WorflowsListComponent;
  let fixture: ComponentFixture<WorflowsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WorflowsListComponent]
    });
    fixture = TestBed.createComponent(WorflowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
