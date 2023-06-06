import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogData, Quiz } from 'src/utils/quizContent.dto';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(
    private http: HttpClient,
    ) {

  }

  jsonPath: string = '../../assets/quizContent.json';

  getCatalogData(): Observable<CatalogData[]> {
      const catalogData = this.http.get(this.jsonPath).pipe(
        map((quizzes: any, i: number) => {
          const homeData: CatalogData[] = quizzes.map((quiz: Quiz) => ({
                  title: quiz.title,
                  id: quiz.id,
                  quantityOfQuestions: quiz.questions.length
              })
          );
          return homeData
        })
      )

      return catalogData
  }

  getQuizById(id: number): Observable<Quiz | undefined> {
    const quizData = this.http.get(this.jsonPath)
      .pipe(map((quizzes: any, i: number) => {
        const quizFiltered: Quiz | undefined = quizzes.find((quiz: Quiz) => quiz.id === id)
        return quizFiltered;
      })
    );

    return quizData;
  }
}
