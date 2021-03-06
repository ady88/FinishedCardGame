import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CardSide } from 'src/app/model/CardSide';
import { CardInfo as CardInfo } from '../../model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';
import { CardPower } from 'src/app/model/CardPower';
import { CardNumber } from 'src/app/model/CardNumber';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardInfo: any;
  @Input() cardSize: string = "";
  @Input() cardIndex: number = 0;
  @Input() presentSize: number = 0;
  @Input() remainingCandies: number = 0;
  
  public imgUrl: string = "../../../assets/cards/back_card.png";
  public isPlayDisabled: boolean = true;
  public exchangeCardInProgress: boolean = false;
  public cardToFutureInProgress: boolean = false;
  public cardsToPastInProgress: boolean = false;


  constructor(private service: MainGameServiceService) {
  }

  ngOnInit(): void {
    this.imgUrl = this.service.getImgUrl(this.cardInfo, this.cardSize);
    this.exchangeCardInProgress = this.service.isExchangeCardInProgress();
    this.cardToFutureInProgress = this.service.isCardToFutureInProgress();
    this.cardsToPastInProgress = this.service.isCardsToPastInProgress();
    console.log(this.imgUrl);
  }

  /**
   * Action to be executed when user clicks on a card. There are only 3 types of possible actions: exchangeCard, cardToFuture and 2CardsInThePast
   */
  executeSpecialCardAction() {
    console.log("ADRIAN 22121211111111111111");
    console.log(this.cardToFutureInProgress); 
    if (this.exchangeCardInProgress == true) {
      console.log("ADRIAN 212121212");
      this.service.backToDrawStack1Card(this.cardIndex);
    } else if (this.cardToFutureInProgress == true) {
      console.log("ADRIAN 333333333");
      this.service.toFuture1Card(this.cardIndex);
    } else if (this.cardsToPastInProgress == true) {
      this.service.toPast1CardAction(this.cardIndex);
    }
  }

  moveLeft() {
    this.service.moveLeft(this.cardIndex);
  }

  moveRight() {
    this.service.moveRight(this.cardIndex);
  }

  executeAction() {
    if (this.service.getCandies() <= 0) {
      return;
    }
    let currentCard = this.cardInfo as CardInfo;
    
    if (this.cardInfo.cardNumber == 47) {
      this.imgUrl = "../../../assets/cards/" + this.cardInfo.cardNumber + "_cardc_" + (currentCard.cardNumberActions - (currentCard.cardAvailableActions - 1)) + ".png";  
    } else {
      this.imgUrl = "../../../assets/cards/" + this.cardInfo.cardNumber + "_cardc.png";
    }
    this.cardInfo.cardAvailableActions--;
    this.service.consumeCandy();

    switch (currentCard.cardPower) {
      case CardPower.drawOne:
        this.service.draw1CardPower();
        break;
      case CardPower.drawTwo:
        this.service.draw2CardsPower();
        break;
      case CardPower.cardsFromPast:
        this.service.getLast2FromPast();
        break;
      case CardPower.belowTheStack:
        this.service.belowTheDrawStack();
        break;
      case CardPower.allCardsIntoFuture:
        this.service.toFutureAll();
        break;
      case CardPower.resetCandies:
        this.service.resetCandies();
        break;
      case CardPower.cardIntoFuture:
        this.cardToFutureInProgress = true;
        this.service.cardToFuture();
        break;
      case CardPower.cardsIntoPast:
        this.service.toPast2Cards();
        break;
      case CardPower.exchangeCard:
        this.exchangeCardInProgress = true;
        this.service.exchangeCard();
        break;  
      default:
        console.log("something went wrong, no card available with the mentioned power.");
    }
  }

  @HostListener('window:updateCardImage-event', ['$event'])
  updateCandies(event: any) {
    this.imgUrl = this.service.getImgUrl(this.cardInfo, this.cardSize);
  }

  @HostListener('window:exchangeCard-event', ['$event'])
  updateExchangeCardProgress(event: any) {
    this.exchangeCardInProgress = this.service.isExchangeCardInProgress();
  }

  @HostListener('window:cardToFuture-event', ['$event'])
  updateCardToFutureProgress(event: any) {
    this.cardToFutureInProgress = this.service.isCardToFutureInProgress();
  }


  @HostListener('window:cardsToPast-event', ['$event'])
  updateCardsToPastProgress(event: any) {
    this.cardsToPastInProgress = this.service.isCardsToPastInProgress();
  }
}
