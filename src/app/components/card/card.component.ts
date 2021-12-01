import { Component, Input, OnInit } from '@angular/core';
import { CardSide } from 'src/app/model/CardSide';
import { CardInfo as CardInfo } from '../../model/CardInfo'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardInfo: any;
  @Input() cardSize: string = "";
  public imgUrl: string = "../../../assets/cards/back_card.png";

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
}
