import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { ReinsuranceElementComponent } from './reinsurance-element/reinsurance-element.component';
import { QuizContent } from 'src/utils/quizContent';
import { QuizCatalogComponent } from './quiz-catalog/quiz-catalog.component';
import { AppRoutingModule } from '../app-routing.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        HeroBannerComponent,
        ReinsuranceElementComponent,
        HomeComponent,
        QuizCatalogComponent
      ],
      imports: [
        AppRoutingModule,
      ],
      providers: [
        QuizContent
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
