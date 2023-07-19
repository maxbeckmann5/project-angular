import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  last_visited=[
    'Subscribed'
  ];
  last_visited_img=[
    '/assets/images/glocke.png'
  ];

  constructor() { }

  addSport(sport: string, sport_img: string){
    this.last_visited.push(sport);
    this.last_visited_img.push(sport_img);
  }
}
