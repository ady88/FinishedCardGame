import { Component } from '@angular/core';
import { CardInfo } from 'src/app/model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  drawCards: Array<CardInfo>;
  constructor(private service: MainGameServiceService) {
    this.drawCards = service.getDrawCards();
    console.log(this.drawCards);
  }

  getStyle() {
    return "10px";
  }

  getStyle1() {
    return "200px";
  }

}
