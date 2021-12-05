import { Injectable } from '@angular/core';
import { throttle } from 'rxjs';
import { debounce, delay, throttleAsync } from 'utils-decorators';
import { CardInfo as CardInfo } from '../model/CardInfo'
import { CardNumber } from '../model/CardNumber';
import { CardNumberActions } from '../model/CardNumberActions';
import { CardPower } from '../model/CardPower';
import { CardSide } from '../model/CardSide';


let cardInfo1 = new CardInfo(CardNumber.one, CardPower.start, CardNumberActions.zero, CardSide.Front);
let cardInfo2 = new CardInfo(CardNumber.two, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo3 = new CardInfo(CardNumber.three, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo4 = new CardInfo(CardNumber.four, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo5 = new CardInfo(CardNumber.five, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo6 = new CardInfo(CardNumber.six, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo7 = new CardInfo(CardNumber.seven, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo8 = new CardInfo(CardNumber.eight, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo9 = new CardInfo(CardNumber.nine, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo10 = new CardInfo(CardNumber.ten, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo11 = new CardInfo(CardNumber.eleven, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo12 = new CardInfo(CardNumber.twelve, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo13 = new CardInfo(CardNumber.thirdteen, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo14 = new CardInfo(CardNumber.fourthteen, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo15 = new CardInfo(CardNumber.fifthteen, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);

let cardInfo16 = new CardInfo(CardNumber.sixthteen, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo17 = new CardInfo(CardNumber.seventeen, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo18 = new CardInfo(CardNumber.eightteen, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo19 = new CardInfo(CardNumber.nineteen, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo20 = new CardInfo(CardNumber.twenty, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo21 = new CardInfo(CardNumber.twentyOne, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo22 = new CardInfo(CardNumber.twentyTwo, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo23 = new CardInfo(CardNumber.twentyThree, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo24 = new CardInfo(CardNumber.twentyFour, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo25 = new CardInfo(CardNumber.twentyFive, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo26 = new CardInfo(CardNumber.twentySix, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo27 = new CardInfo(CardNumber.twentySeven, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo28 = new CardInfo(CardNumber.twentyEight, CardPower.start, CardNumberActions.zero, CardSide.Back);
let cardInfo29 = new CardInfo(CardNumber.twentyNine, CardPower.drawTwo, CardNumberActions.one, CardSide.Back);
let cardInfo30 = new CardInfo(CardNumber.thirty, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo31 = new CardInfo(CardNumber.thirtyOne, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo32 = new CardInfo(CardNumber.thirtyTwo, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo33 = new CardInfo(CardNumber.thirtyThree, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo34 = new CardInfo(CardNumber.thirtyFour, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo35 = new CardInfo(CardNumber.thirtyFive, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo36 = new CardInfo(CardNumber.thirtySix, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo37 = new CardInfo(CardNumber.thirtySeven, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo38 = new CardInfo(CardNumber.thirtyEight, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo39 = new CardInfo(CardNumber.thirtyNine, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo40 = new CardInfo(CardNumber.forty, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo41 = new CardInfo(CardNumber.fortyOne, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo42 = new CardInfo(CardNumber.fortyTwo, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo43 = new CardInfo(CardNumber.fortyThree, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo44 = new CardInfo(CardNumber.fortyFour, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo45 = new CardInfo(CardNumber.fortyFive, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo46 = new CardInfo(CardNumber.fortySix, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo47 = new CardInfo(CardNumber.fortySeven, CardPower.takeCandy, CardNumberActions.zero, CardSide.Back);
let cardInfo48 = new CardInfo(CardNumber.fortyEight, CardPower.drinkCofee, CardNumberActions.zero, CardSide.Back);

const timeout: number = 400;

@Injectable({
  providedIn: 'root'
})
export class MainGameServiceService {
  public drawCards: Array<CardInfo>;
  public presentCards: Array<CardInfo>;
  public pastCards: Array<CardInfo>;
  public futureCards: Array<Array<CardInfo>>;
  public candies: number;
  public cofees: number;
  public sortedCards: number;


  constructor() {
    this.drawCards = [cardInfo1, cardInfo2, cardInfo3, cardInfo4, cardInfo5, cardInfo6, cardInfo7, cardInfo8, cardInfo9, cardInfo10,
      cardInfo11, cardInfo12, cardInfo13, cardInfo14, cardInfo15, cardInfo16, cardInfo17, cardInfo18, cardInfo19, cardInfo20,
      cardInfo21, cardInfo22, cardInfo23, cardInfo24, cardInfo25, cardInfo26, cardInfo27, cardInfo28, cardInfo29, cardInfo30,
      cardInfo31, cardInfo32, cardInfo33, cardInfo34, cardInfo35, cardInfo36, cardInfo37, cardInfo38, cardInfo39, cardInfo40,
      cardInfo41, cardInfo42, cardInfo43, cardInfo44, cardInfo45, cardInfo46, cardInfo47];

    this.shuffle(this.drawCards);
    this.drawCards.push(cardInfo48);
    this.presentCards = [];
    this.pastCards = [];
    this.futureCards = [[]];
    this.candies = 10;
    this.cofees = 7;
    this.sortedCards = 0;
  }


  async draw3Cards() {
    await this.draw1Card();
    await this.draw1Card();
    await this.draw1Card();
    this.checkForSortedCards();
  }


  async draw1Card(): Promise<void> {
    this.presentCards.push(this.drawCards.shift() as CardInfo);
    window.dispatchEvent(new Event('drawCard-event'));
    await new Promise(resolve => setTimeout(resolve, timeout));

  }

  /**
   * Check for sorted cards and execute appropriate actions is such card is found
   */

  async checkForSortedCards() {
    console.log(this.presentCards.length);
    console.log(this.presentCards.some((e: CardInfo) => e.cardNumber === this.sortedCards + 1));
    while (this.presentCards.length > 0 && this.presentCards.some((e: CardInfo) => e.cardNumber === this.sortedCards + 1)) {
      console.log(this.presentCards.length);
      console.log(this.presentCards.some((e: CardInfo) => e.cardNumber === this.sortedCards + 1));
      let sortedCardsAux = this.presentCards.filter((e: CardInfo) => e.cardNumber === this.sortedCards + 1)[0];
      let index = this.presentCards.indexOf(sortedCardsAux);


      console.log(sortedCardsAux);

      this.presentCards.splice(index, 1);
      this.addSortedCard();

      window.dispatchEvent(new Event('updatedSortedCards-event'));
      if (this.drawCards.length > 0) {
        await this.draw1Card();
      }
    }
  }

  async toPast() {
    while (this.presentCards.length > 0) {
      await this.toPast1Card();
    }
    await this.backToDrawStack();
    this.draw3Cards();
  }

  async toPast1Card() {
    let removedCard = this.presentCards.shift() as CardInfo;
    this.pastCards.push(removedCard);
    if (removedCard.cardNumber == 48) {
      this.cofees--;
      window.dispatchEvent(new Event('updatedCofees-event'));
    }

    await new Promise(resolve => setTimeout(resolve, timeout));
  }

  async backToDrawStack() {
    while (this.pastCards.length > 3) {
      this.drawCards.push(this.pastCards.shift() as CardInfo);
      await new Promise(resolve => setTimeout(resolve, timeout));
    }
  }

  addSortedCard() {
    this.sortedCards++;
  }



  toFutureAll() {
    let i = 0;
    while (this.futureCards[i].length > 0) {
      i++;
    }
    while (this.presentCards.length > 0) {
      this.futureCards[i].push(this.presentCards.shift() as CardInfo);

    }
  }

  getDrawCards() {
    return this.drawCards.slice();
  }

  getPresentCards() {
    return this.presentCards;
  }

  getFirstPresentCard() {
    return this.presentCards[0];
  }

  getLastPresentCard() {
    return this.presentCards[this.presentCards.length - 1];
  }

  getPastCards() {
    return this.pastCards;
  }

  getFutureCards() {
    return this.futureCards.slice();
  }

  getCandies() {
    return this.candies;
  }

  getCofees() {
    return this.cofees;
  }
  getSortedCards() {
    return this.sortedCards;
  }

  shuffle(array: Array<CardInfo>) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  moveLeft(cardIndex: number) {
    let aux = this.presentCards[cardIndex];
    this.presentCards[cardIndex] = this.presentCards[cardIndex - 1];
    this.presentCards[cardIndex - 1] = aux;
  }

  moveRight(cardIndex: number) {
    let aux = this.presentCards[cardIndex];
    this.presentCards[cardIndex] = this.presentCards[cardIndex + 1];
    this.presentCards[cardIndex + 1] = aux;
  }

}
