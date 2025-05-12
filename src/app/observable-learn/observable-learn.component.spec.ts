import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableLearnComponent } from './observable-learn.component';

describe('ObservableLearnComponent', () => {
  let component: ObservableLearnComponent;
  let fixture: ComponentFixture<ObservableLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableLearnComponent]
    });
    fixture = TestBed.createComponent(ObservableLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
