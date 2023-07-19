import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-visited',
  templateUrl: './last-visited.component.html',
  styleUrls: ['./last-visited.component.scss']
})
export class LastVisitedComponent {
  last_visited=[
    'Fußball',
    'Tennis',
    'Golf',
    'Radsport'
  ];
  last_visited_img=[
    'assets/images/Sport/fussball.jpg',
    'assets/images/Sport/tennis.jpg',
    'assets/images/Sport/golf.jpg',
    'assets/images/Sport/tour-de-france.jpg',
  ];
  constructor(){}
  ngOnInit(): void{}

}
