import { Component, HostListener, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';

@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {

  futureCards: Array<Array<CardInfo>>;
  cardSize: string = "small";
  constructor(private service: MainGameServiceService) {
    this.futureCards = service.getFutureCards();
    console.log(this.futureCards);
  }

  ngOnInit(): void {
  }

  @HostListener('window:updateFutureCards-event', ['$event'])
  updateNodes(event: any) {
    this.futureCards = this.service.getFutureCards();
  }

}
