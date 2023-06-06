import { Component, OnInit } from '@angular/core';
import { CatalogData } from '../../utils/quizContent.dto';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reinsuranceText: string = "Nos questions sont vérifiées par des professionnels.elles et sourcées avec le MDN";

  catalogData: CatalogData[] | undefined;
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getCatalogData().subscribe(
      (homeData) => this.catalogData = homeData
    );
  }
}
