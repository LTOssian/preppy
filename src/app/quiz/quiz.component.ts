import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AnswerType, Quiz } from 'src/utils/quizContent.dto';
import { QuizService } from '../services/quiz.service';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentQuiz$: Observable<Quiz | undefined> | undefined = undefined;
  currentQuestionIndex: number = 0;
  correctAnswers: number = 0;
  scorePercentage: number = 100; 
  gameStatus: boolean = true;
  isCurrentQuestionAnswered: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
  ) {}

  ngOnInit(): void {
    this.currentQuiz$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = Number(params.get('id'));
        return this.quizService.getQuizById(id);
      })
    );
  }


  getCurrentQuestion(quiz: Quiz): string {
    const currentIndex = this.getCurrentQuestionIndex();
    return quiz.questions[currentIndex].question;
  }

  getCurrentQuestionIndex(): number{
    return this.currentQuestionIndex;
  }

  getTotalQuestions(quiz: Quiz): number {
    return quiz.questions.length
  }

  getCurrentScore(): number {
    return this.scorePercentage;
  }

  getCurrentAnswers(quiz: Quiz): AnswerType[] {
    const currentIndex = this.getCurrentQuestionIndex();
    return quiz.questions[currentIndex].answers;
  }

  setNextQuestion(quiz: Quiz) {
    if (this.isCurrentQuestionAnswered) {
      this.currentQuestionIndex++;
      this.currentQuestionIndex > (this.getTotalQuestions(quiz) - 1) ? this.gameStatus = false : null;  
      this.isCurrentQuestionAnswered = false;
    } 
  }

  setCurrentScore(quiz: Quiz) {
    this.scorePercentage = parseFloat(((this.correctAnswers / this.getTotalQuestions(quiz))).toFixed(4))*100;
  }

  handleAnswer($event: boolean, quiz: Quiz) {
    if (!this.isCurrentQuestionAnswered) {
      const isCorrect = $event
      this.correctAnswers = isCorrect ? this.correctAnswers + 1 : this.correctAnswers;
      this.setCurrentScore(quiz);
      this.isCurrentQuestionAnswered = true;
    }
  }
}

