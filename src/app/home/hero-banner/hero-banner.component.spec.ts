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

  it('should display the hero title', () => {
    const titleElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain(component.heroTitle);
  });

  it('should display the hero tags', () => {
    const tagElements: HTMLSpanElement[] = fixture.nativeElement.querySelectorAll('.heroTag');
    expect(tagElements.length).toBe(component.heroTags.length);

    Array.from(tagElements).forEach((tagElement, i: number) => {
      expect(tagElement.textContent).toContain(component.heroTags[i])
    });
  });

  it('should display the hero subTitle', () => {
    const subTitleElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(subTitleElement.textContent).toContain(component.heroSubTitle);
  })

});
