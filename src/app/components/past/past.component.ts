import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  pastCards: Array<CardInfo>;
  cardSize: string = "medium";
  constructor(private service: MainGameServiceService) {
    this.pastCards = service.getPastCards();
    console.log(this.pastCards);
  }

  ngOnInit(): void {
  }

}
