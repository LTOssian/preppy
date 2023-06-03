import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroBannerComponent } from './home/hero-banner/hero-banner.component';
import { ReinsuranceElementComponent } from './home/reinsurance-element/reinsurance-element.component';
import { QuizCatalogComponent } from './home/quiz-catalog/quiz-catalog.component';
import { QuizContent } from '../utils/quizContent';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    HeroBannerComponent,
    ReinsuranceElementComponent,
    QuizCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    QuizContent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
