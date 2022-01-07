import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FuturesComponent } from './components/futures/futures.component';
import { PresentComponent } from './components/present/present.component';
import { PastComponent } from './components/past/past.component';
import { StatsComponent } from './components/stats/stats.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import {MainGameServiceService} from './services/main-game-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FuturesComponent,
    PresentComponent,
    PastComponent,
    StatsComponent,
    DashboardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [MainGameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
