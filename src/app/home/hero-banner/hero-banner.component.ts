import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  heroTitle: string = "Renforcez vos bases de programmation !";
  heroTags: string[] = ["HTML5", "CSS3", "JavaScript"];
  heroSubTitle: string = "Preppy est un site permettant au développeur débutant de challengez leurs connaissances avec des quiz."
}
