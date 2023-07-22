import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {

  similarMovies: any[] = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadSimilarMovies();
  }

  loadSimilarMovies() {
    this.moviesService.getSimilarMovies()
    .subscribe((data:any[]) => {
      this.similarMovies = data;
    })
  }

}
