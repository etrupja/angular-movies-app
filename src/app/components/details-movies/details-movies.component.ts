import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {

  similarMovies: any[] = [
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      rate: 9.5
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
