import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle = "";

  constructor(private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    })
  }

  ngOnInit(): void {
  }

}
