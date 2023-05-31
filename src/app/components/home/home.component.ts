import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorColor = "text-danger";
  successColor = "text-success";
  isSuccess = true;

  constructor() { }

  ngOnInit(): void {
  }

}
