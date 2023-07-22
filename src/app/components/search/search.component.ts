import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle = "";
  searchResult: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) { 
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    })
  }

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies(){
    this.httpClient.get<any[]>('assets/data/movieSearch.json')
    .subscribe((data:any[]) => {
      this.searchResult = data;
    });
  }

}
