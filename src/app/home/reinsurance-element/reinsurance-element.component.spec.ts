import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsuranceElementComponent } from './reinsurance-element.component';
import { HomeComponent } from '../home.component';
describe('ReinsuranceElementComponent', () => {
  let component: ReinsuranceElementComponent;
  let fixture: ComponentFixture<ReinsuranceElementComponent>;
  let parentComponent: HomeComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ReinsuranceElementComponent]
    });
    fixture = TestBed.createComponent(ReinsuranceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input property for reinsuranceText', () => {
    expect(component.reinsuranceText).toBeUndefined();
  })
});
