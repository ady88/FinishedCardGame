import { Component, HostListener, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';
import { faPlay, faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  drawCards: Array<CardInfo>;
  candies: number = 0;
  cofees: number = 0;
  sortedCards: number = 0;
  gameIsStarted: boolean = false;
  faPlay = faPlay;
  faStopWatch = faStopwatch;
  
  constructor(private service: MainGameServiceService) {
    this.drawCards = service.getDrawCards();
    console.log(this.drawCards);
  }
  ngOnInit(): void {
    this.candies = this.service.getCandies();
    this.cofees = this.service.getCofees();
    this.sortedCards = this.service.getSortedCards();
  }

  @HostListener('window:updatedSortedCards-event', ['$event']) 
  updateSortedCards(event:any) {
    this.sortedCards = this.service.getSortedCards();
  }

  @HostListener('window:updatedCofees-event', ['$event']) 
  updateCofees(event:any) {
    this.cofees = this.service.getCofees();
  }

  @HostListener('window:updateCandies-event', ['$event']) 
  updateCandies(event:any) {
    console.log("ADRIAN from event");
    this.candies = this.service.getCandies();
  }

  draw3Cards() {
    this.service.draw3Cards();
    this.gameIsStarted = true;
  }

  toPast() {
    this.service.toPast();
  }

  toFutureAll() {
    this.service.toFutureAll();
  }

  modelChangeFn(e:number) {
    this.sortedCards=e;
  }

}
