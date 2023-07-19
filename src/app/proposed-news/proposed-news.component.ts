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

  constructor(public su: SubService) {}

  ngOnInit(): void{}
}
