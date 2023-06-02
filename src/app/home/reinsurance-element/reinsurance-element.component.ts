import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reinsurance-element',
  templateUrl: './reinsurance-element.component.html',
  styleUrls: ['./reinsurance-element.component.css']
})
export class ReinsuranceElementComponent implements OnInit{

  @Input() 
  reinsuranceText: string | undefined;

  constructor() {}
  ngOnInit(): void {
      
  }
}
