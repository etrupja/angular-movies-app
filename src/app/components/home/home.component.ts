import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentStyles: Record<string, string> = {};


  isCentered = true;
  isSuccess = false;
  isLarge = true;

  constructor() { 
    this.currentStyles = {
      'text-align': this.isCentered ? 'center':'',
      'color': this.isSuccess ? 'green':'red',
      'font-size': this.isLarge ? 'large': 'small'
    };
  }

  ngOnInit(): void {
  }

}
