import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/model/CardInfo';
import { MainGameServiceService as MainGameServiceService } from '../../services/main-game-service.service'

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {
  presentCards: Array<CardInfo>;
  cardSize: string = "normal";
  constructor(private service: MainGameServiceService) {
    this.presentCards = service.getPresentCards();
    console.log(this.presentCards);
  }

  ngOnInit(): void {
  }

}
