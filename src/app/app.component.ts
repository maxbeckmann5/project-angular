import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  NewsText=[
    'Fußball:',
    'Golf:',
    'Motorsport:',
    'Tennis:',
    'Tour de France',
    'Wintersport'

  ]

  description=[
    'Nach Sky Informationen steht Hertha-BSC-Profi Lucas Tousart unmittelbar vor einem Wechsel zum Berliner Stadtrivalen Union.',
    'Rory Mcllroy der eindeutige Favorit für die British Open 2023. Was für ihn spricht und wer ihm den Titel streitig machen könnte.',
    'Daniel Ricciardo kehrt als Stammfahrer zurück und übernimmt bei Alpha Tauri für Nyck de Vries.',
    'Carlos Alcaraz hat erstmals den Rasentennis-Klassiker in Wimbeldon gewonnnen und mit einem Fünf-Satz-Erfolg den achten Triumoh von Novak Djokovic verhindert.',
    'Jonas Vingegaard dominiert das Zeitfahren der 16.Etappe der Tour de France auf eine Weise, die niemand so recht zu erklären vermag.',
    'Wann geht es wieder los? Die Termin für Ski-Alpin, Biathlon, Skispringen und Co. im Überblick.'
  ]

  NewsImage=[
    'assets/images/Sport/fussball.jpg',
    'assets/images/Sport/golf.jpg',
    'assets/images/Sport/motorsport.jpg',
    'assets/images/Sport/tennis.jpg',
    'assets/images/Sport/tour-de-france.jpg',
    'assets/images/Sport/wintersport.jpg'
  ]

  buttonClick(){
    alert('Hallo wie geht es dir');
  }
}
