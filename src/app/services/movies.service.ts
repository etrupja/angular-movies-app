import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getFanFavoriteMovies(){
    return this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json');
  }

  getTopMovies(){
   return this.httpClient.get<any[]>('assets/data/topMovies.json');
  }

  getMovieSummary(){
    return this.httpClient.get('assets/data/movieSummaryNotExists.json');
  }

  getMovieActors() {
    return this.httpClient.get<any[]>('assets/data/movieActors.json');
  }

  getSimilarMovies() {
    return this.httpClient.get<any[]>('assets/data/similarMovies.json');
  }

  getMovieRates() {
    return this.httpClient.get<any[]>('assets/data/movieRates.json');
  }

  getSearchedMovies(){
    return this.httpClient.get<any[]>('assets/data/movieSearch.json');
  }

}
