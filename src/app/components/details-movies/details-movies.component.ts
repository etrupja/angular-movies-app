import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {

  similarMovies: any[] = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadSimilarMovies();
  }

  loadSimilarMovies() {
    this.httpClient.get<any[]>('assets/data/similarMovies.json')
    .subscribe((data:any[]) => {
      this.similarMovies = data;
    })
  }

}
