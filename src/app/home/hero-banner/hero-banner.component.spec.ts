import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerComponent } from './hero-banner.component';

describe('HeroBannerComponent', () => {
  let component: HeroBannerComponent;
  let fixture: ComponentFixture<HeroBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBannerComponent]
    });
    fixture = TestBed.createComponent(HeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
