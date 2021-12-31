import { Component, HostListener, OnInit } from '@angular/core';
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
  remainingCandies: number = 0;
  constructor(private service: MainGameServiceService) {
    this.presentCards = service.getPresentCards();
    this.remainingCandies = service.getCandies();
    console.log(this.presentCards);
  }

  @HostListener('window:drawCard-event', ['$event'])
  updateNodes(event: any) {
    this.presentCards = this.service.getPresentCards();
  }

  @HostListener('window:updateCandies-event', ['$event'])
  updateCandies(event: any) {
    this.remainingCandies = this.service.getCandies();
  }

  ngOnInit(): void {
  }

}
