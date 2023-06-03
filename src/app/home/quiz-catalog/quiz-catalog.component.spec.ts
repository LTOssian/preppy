import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCatalogComponent } from './quiz-catalog.component';
import { QuizContent } from 'src/utils/quizContent';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

describe('QuizCatalogComponent', () => {
  let component: QuizCatalogComponent;
  let fixture: ComponentFixture<QuizCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizCatalogComponent],
      imports: [
        AppRoutingModule,
      ],
      providers: [
        QuizContent
      ],
        });
    fixture = TestBed.createComponent(QuizCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the catalog data correctly', () => {
    const catalogData = (new QuizContent()).getCatalogData();

    component.data = catalogData;
    fixture.detectChanges();

    const titleContainerElements: HTMLDivElement[] = Array.from(fixture.nativeElement.querySelectorAll('.titleContainer'))
    expect(titleContainerElements.length).toBe(catalogData.length);

    titleContainerElements.forEach((titleContainer, i: number) => {
      const quizDatum = catalogData[i];

      const routerLinkElement = titleContainer.querySelector('a') as HTMLAnchorElement;
      const titleText = routerLinkElement.querySelector('p')?.textContent;
      const quantityText = routerLinkElement.querySelector('span')?.textContent;

      expect(titleText).toContain(quizDatum.title);
      expect(quantityText).toContain(`${quizDatum.quantityOfQuestions} questions`);
      expect(routerLinkElement.getAttribute('href')).toBe(`/quiz/${quizDatum.id}`);
    })
  })
});
