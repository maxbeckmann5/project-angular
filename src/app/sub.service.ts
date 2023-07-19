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
  usedSports: { [sport: string]: boolean } = {};

  constructor() { }

  addSport(sport: string, sport_img: string) {
    const index = this.last_visited.findIndex((item, idx) => {
      return item === sport && this.last_visited_img[idx] === sport_img;
    });

    if (index !== -1) {
      this.last_visited.splice(index, 1);
      this.last_visited_img.splice(index, 1);
    } else {
      this.last_visited.push(sport);
      this.last_visited_img.push(sport_img);
    }
  }
}
