import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {

movieRates: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovieRates();
  }

  loadMovieRates() {
    this.moviesService.getMovieRates()
    .subscribe((data:any[]) => {
      this.movieRates = data;
    })
  }

}
