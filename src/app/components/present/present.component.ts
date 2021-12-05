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
  constructor(private service: MainGameServiceService) {
    this.presentCards = service.getPresentCards();
    console.log(this.presentCards);


    // window.setInterval(() => {
    //   if (this.presentCards.length > 0 && this.presentCards.some((e: CardInfo) => e.cardNumber === this.service.getSortedCards() + 1)) {
    //     let sortedCardsAux = this.presentCards.filter((e: CardInfo) => e.cardNumber === this.service.getSortedCards() + 1)[0];
    //     let index = this.presentCards.indexOf(sortedCardsAux);


    //     console.log(sortedCardsAux);

    //     this.presentCards.splice(index, 1);
    //     this.service.addSortedCard();

    //     window.dispatchEvent(new Event('updatedSortedCards-event'));
    //     if (this.service.getDrawCards().length > 0) {
    //       this.service.draw1Card();
    //     }
    //   }
    // }, 500);
  }

  @HostListener('window:drawCard-event', ['$event'])
  updateNodes(event: any) {
    this.presentCards = this.service.getPresentCards();
  }

  ngOnInit(): void {
  }

}
