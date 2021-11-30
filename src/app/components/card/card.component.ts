import { Component, Input } from '@angular/core';
import { CardSide } from 'src/app/model/CardSide';
import { CardInfo as CardInfo } from '../../model/CardInfo'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  @Input() cardInfo: any;

  getClass() {
    let result = "";
    if (this.cardInfo.cardSide== CardSide.Front){
      result = "bg-img-" + this.cardInfo.cardNumber;
    } else {
      result = "bg-img-back";
    }
    return result;
  }
}
