import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposed-news',
  templateUrl: './proposed-news.component.html',
  styleUrls: ['./proposed-news.component.scss']
})
export class ProposedNewsComponent {
  @Input() news='';
  @Input() images='';
  @Input() text='';

  constructor(){}

  ngOnInit(): void{}
}
