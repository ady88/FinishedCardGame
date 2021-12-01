import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';

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
  constructor(private service: MainGameServiceService) {
    this.drawCards = service.getDrawCards();
    console.log(this.drawCards);
  }
  ngOnInit(): void {
    this.candies = this.service.getCandies();
    this.cofees = this.service.getCofees();
    this.sortedCards = this.service.getSortedCards();
  }

  draw3Cards() {
    this.service.draw3Cards();
  }

  toPast() {
    this.service.toPast();
  }

  toFutureAll() {
    this.service.toFutureAll();
  }

}
