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


  constructor(private service: MainGameServiceService) {
  }

  ngOnInit(): void {
    this.imgUrl = this.service.getImgUrl(this.cardInfo, this.cardSize);
    console.log(this.imgUrl);
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
      default:
        console.log("something went wrong, no card available with the mentioned power.");
    }
  }

  @HostListener('window:updateCardImage-event', ['$event'])
  updateCandies(event: any) {
    this.imgUrl = this.service.getImgUrl(this.cardInfo, this.cardSize);
  }
}
