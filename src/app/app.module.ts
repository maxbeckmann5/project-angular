import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProposedNewsComponent } from './proposed-news/proposed-news.component';
import { LastVisitedComponent } from './last-visited/last-visited.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsCardComponent,
    ProposalsComponent,
    ProposedNewsComponent,
    LastVisitedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
