import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
news=[
  'FC Bayern verpflichtet neuen Spieler!',
  'Wer gewinnt die 15.Etappe der Tour de France?',
  'Wimbeldon Gewinner Alcaraz im Interview!',
  'Wann starten die Wintersportler in die Saison?',
  'Formel 1: Die aktuelle WM-Wertung.'
];
text=[
  'Sportvorstand gibt neuen Transfer bekannt.',
  'Die Favoriten im Check',
  'Was bedeutet ihm der Sieg?',
  'Saisonstart früher als letztes Jahr',
  'Wer führt die Wertung an?'
];
images=[
  '/assets/images/Sport/logo-fc-bayern.jpg',
  '/assets/images/Sport/tour-de-france-news.jpg',
  '/assets/images/Sport/tennis-wimbeldon.jpg',
  '/assets/images/Sport/wintersport-news.jpg',
  '/assets/images/Sport/formel1.jpg'
];
}
