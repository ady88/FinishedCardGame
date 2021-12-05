import { Component, Input, OnInit } from '@angular/core';
import { CardSide } from 'src/app/model/CardSide';
import { CardInfo as CardInfo } from '../../model/CardInfo';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';

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
  public imgUrl: string = "../../../assets/cards/back_card.png";
  public isPlayDisabled: boolean = true;


  constructor(private service: MainGameServiceService) {
  }

  ngOnInit(): void {
    this.imgUrl = this.getImgUrl();
    console.log(this.imgUrl);
  }
  getImgUrl() {
    let result = "";

    if (this.cardSize == "normal") {
      if (this.cardInfo.cardSide == CardSide.Front) {
        result = "../../../assets/cards/" + this.cardInfo.cardNumber + "_card.png";
      } else {
        result = "../../../assets/cards/back_card.png";
      }
    } else if (this.cardSize == "medium") {
      if (this.cardInfo.cardSide == CardSide.Front) {
        result = "../../../assets/cards/" + this.cardInfo.cardNumber + "_card_medium.png";
      } else {
        result = "../../../assets/cards/back_card_medium.png";
      }
    } else {
      if (this.cardInfo.cardSide == CardSide.Front) {
        result = "../../../assets/cards/" + this.cardInfo.cardNumber + "_card_small.png";
      } else {
        result = "../../../assets/cards/back_card_small.png";
      }
    }
    return result;
  }

  moveLeft() {
    this.service.moveLeft(this.cardIndex);
  }

  moveRight() {
    this.service.moveRight(this.cardIndex);
  }
}
