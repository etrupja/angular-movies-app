import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent implements OnInit {

  movieActors: any[] = [
    {
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },
    {
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },{
      imageUrl:'../../../assets/images/actor-image.jpg',
      name: 'Actor name',
      role: 'Role'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
