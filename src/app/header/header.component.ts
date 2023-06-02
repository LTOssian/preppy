import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDesktopSize: boolean | undefined;

  constructor() {}

  ngOnInit(): void {
      this.isDesktopSize = window.innerWidth >= 768;
  }

  @HostListener('window:resize', ["$event"])
  onResize() {
    this.isDesktopSize = window.innerWidth >= 768;
  }
}
