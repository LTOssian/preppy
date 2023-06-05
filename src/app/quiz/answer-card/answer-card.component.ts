import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerType } from 'src/utils/quizContent.dto';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.css']
})
export class AnswerCardComponent {
  isClicked: boolean = false;
  @Input()
  answerData: AnswerType | undefined;
  
  click() {
    this.isClicked = true;
  }
}
