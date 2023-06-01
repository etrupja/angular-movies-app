import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  integerValue = 15;

  fanFavoriteMovies: any[] = 
  [
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #1 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: 9.5,
      rank: 1
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      actors: 'Movie #2 Actors',
      year: '2023',
      rate: 9.2,
      rank: 2
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #3 Title',
      actors: 'Movie #3 Actors',
      year: '2023',
      rate: 9.2,
      rank: 3
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #4 Title',
      actors: 'Movie #4 Actors',
      year: '2023',
      rate: 9.2,
      rank: 4
    }
  ]

  topMovies: any[] = 
  [
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #1 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: 9.5,
      rank: 1
    },
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 Title',
      actors: 'Movie #2 Actors',
      year: '2023',
      rate: 9.2,
      rank: 2
    }
  ]

  // currentStyles: Record<string, string> = {};
  // isCentered = true;
  // isSuccess = false;
  // isLarge = true;

  // constructor() { 
  //   // this.currentStyles = {
  //   //   'text-align': this.isCentered ? 'center':'',
  //   //   'color': this.isSuccess ? 'green':'red',
  //   //   'font-size': this.isLarge ? 'large': 'small'
  //   // };
  // }

  ngOnInit(): void {
  }

}
