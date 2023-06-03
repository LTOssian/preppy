import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCatalogComponent } from './quiz-catalog.component';
import { QuizContent } from 'src/utils/quizContent';

describe('QuizCatalogComponent', () => {
  let component: QuizCatalogComponent;
  let fixture: ComponentFixture<QuizCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizCatalogComponent]
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

      const routeLinkElement = titleContainer.querySelector('a') as HTMLAnchorElement;
      const titleText = routeLinkElement.querySelector('p')?.textContent;
      const quantityText = routeLinkElement.querySelector('span')?.textContent;

      expect(titleText).toContain(quizDatum.title);
      expect(quantityText).toContain(`${quizDatum.quantityOfQuestions} questions`);
      expect(routeLinkElement.getAttribute('routerLink')).toBe(`/quiz/${quizDatum.id}`);
    })
  })
});
