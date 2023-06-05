import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerType } from 'src/utils/quizContent.dto';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent {
  isAnswered: boolean = false;

  @Input()
  currentData: AnswerType[] | undefined;  

  @Output() 
  answerClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  click(answerStatus: boolean) {
    this.isAnswered = true;
    this.answerClicked.emit(answerStatus);
  }
}
