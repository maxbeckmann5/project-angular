import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-last-visited',
  templateUrl: './last-visited.component.html',
  styleUrls: ['./last-visited.component.scss']
})
export class LastVisitedComponent {
  
  constructor(public su: SubService){}
  ngOnInit(): void{}

}
