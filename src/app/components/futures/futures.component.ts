import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';

@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {

  drawCards: Array<Array<CardInfo>>;
  cardSize: string = "small";
  constructor(private service: MainGameServiceService) {
    this.drawCards = service.getFutureCards();
    console.log(this.drawCards);
  }

  ngOnInit(): void {
  }

}
