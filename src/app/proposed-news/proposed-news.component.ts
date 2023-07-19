import { Component, Input, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-proposed-news',
  templateUrl: './proposed-news.component.html',
  styleUrls: ['./proposed-news.component.scss']
})
export class ProposedNewsComponent {
  @Input() news='';
  @Input() images='';
  @Input() text='';

  @Input() showBell1: boolean = true;

  constructor(public su: SubService) {}

  onBellClick(){
  this.showBell1=!this.showBell1;
  }
  ngOnInit(): void{}
}
