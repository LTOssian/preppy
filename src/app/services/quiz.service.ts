import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogData, Quiz } from 'src/utils/quizContent.dto';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getCatalogData(): Observable<CatalogData[]> {
      const catalogData = this.http.get('../assets/quizContent.json').pipe(
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
}
