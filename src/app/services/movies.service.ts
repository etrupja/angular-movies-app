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
}
