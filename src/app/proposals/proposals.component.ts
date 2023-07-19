import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
news=[
  'Fußball',
  'Tour de France',
  'Tennis',
  'Wintersport',
  'Formel 1'
];
text=[
  'FC Bayern verpflichtet neuen Spieler! Sportvorstand gibt neuen Transfer bekannt.',
  'Wer gewinnt die 15.Etappe der Tour de France? Die Favoriten im Check',
  'Wimbeldon Gewinner Alcaraz im Interview! Was bedeutet ihm der Sieg?',
  'Wann starten die Wintersportler in die Saison? Saisonstart früher als letztes Jahr',
  'Formel 1: Die aktuelle WM-Wertung. Wer führt die Wertung an?'
];
images=[
  '/assets/images/Sport/logo-fc-bayern.jpg',
  '/assets/images/Sport/tour-de-france-news.jpg',
  '/assets/images/Sport/tennis-wimbeldon.jpg',
  '/assets/images/Sport/wintersport-news.jpg',
  '/assets/images/Sport/formel1.jpg'
];
}
