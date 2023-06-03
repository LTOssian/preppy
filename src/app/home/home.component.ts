import { Component, NgModule, OnInit } from '@angular/core';
import { QuizContent } from '../../utils/quizContent';
import { CatalogData } from '../../utils/quizContent.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reinsuranceText: string = "Nos questions sont vérifiés par des professionnels et sourcés par le MDN";

  catalogData: CatalogData[] | undefined;

  constructor(private quizContent: QuizContent) {}

  ngOnInit(): void {
    this.catalogData = this.quizContent.getCatalogData();
  }
}
