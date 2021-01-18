import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { GraphComponent } from './graph/graph.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsPerDayComponent } from './statistics-per-day/statistics-per-day.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    NavComponent,
    GraphComponent,
    StatisticsComponent,
    StatisticsPerDayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
