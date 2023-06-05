import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextButtonComponent } from './next-button.component';

describe('NextButtonComponent', () => {
  let component: NextButtonComponent;
  let fixture: ComponentFixture<NextButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextButtonComponent]
    });
    fixture = TestBed.createComponent(NextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
