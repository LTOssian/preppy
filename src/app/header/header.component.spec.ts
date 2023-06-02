import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the desktop logo when isDesktopSize is true', () => {
    component.isDesktopSize = true;
    fixture.detectChanges();

    const desktopLogo = fixture.nativeElement.querySelector('img[src="../../assets/logoDesktop.svg"]');
    const mobileLogo = fixture.nativeElement.querySelector('img[src="../../assets/logoMobile.svg"]');
    expect(desktopLogo).toBeTruthy();
    expect(mobileLogo).toBeFalsy();
  });
});
