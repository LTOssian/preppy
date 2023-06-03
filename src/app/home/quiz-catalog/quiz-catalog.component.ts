import { Component, OnInit, Input } from '@angular/core';
import { CatalogData } from 'src/utils/quizContent.dto';

@Component({
  selector: 'app-quiz-catalog',
  templateUrl: './quiz-catalog.component.html',
  styleUrls: ['./quiz-catalog.component.css']
})

export class QuizCatalogComponent {
  @Input() 
  data: CatalogData[] | undefined;
}
