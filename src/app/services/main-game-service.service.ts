import { BoundTextAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { max } from 'rxjs';
import { CardInfo as CardInfo } from '../model/CardInfo'
import { CardNumber } from '../model/CardNumber';
import { CardNumberActions } from '../model/CardNumberActions';
import { CardPower } from '../model/CardPower';
import { CardSide } from '../model/CardSide';


let cardInfo1 = new CardInfo(CardNumber.one, CardPower.start, CardNumberActions.zero, CardSide.Front);
let cardInfo2 = new CardInfo(CardNumber.two, CardPower.drawTwo, CardNumberActions.one, CardSide.Front);
let cardInfo3 = new CardInfo(CardNumber.three, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);
let cardInfo4 = new CardInfo(CardNumber.four, CardPower.belowTheStack, CardNumberActions.one, CardSide.Front);
let cardInfo5 = new CardInfo(CardNumber.five, CardPower.cardsIntoPast, CardNumberActions.one, CardSide.Front);
let cardInfo6 = new CardInfo(CardNumber.six, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);
let cardInfo7 = new CardInfo(CardNumber.seven, CardPower.belowTheStack, CardNumberActions.one, CardSide.Front);
let cardInfo8 = new CardInfo(CardNumber.eight, CardPower.cardsFromPast, CardNumberActions.one, CardSide.Front);
let cardInfo9 = new CardInfo(CardNumber.nine, CardPower.drawOne, CardNumberActions.one, CardSide.Front);
let cardInfo10 = new CardInfo(CardNumber.ten, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);
let cardInfo11 = new CardInfo(CardNumber.eleven, CardPower.cardsIntoPast, CardNumberActions.one, CardSide.Front);
let cardInfo12 = new CardInfo(CardNumber.twelve, CardPower.cardIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo13 = new CardInfo(CardNumber.thirdteen, CardPower.exchangeCard, CardNumberActions.one, CardSide.Front);
let cardInfo14 = new CardInfo(CardNumber.fourthteen, CardPower.drawOne, CardNumberActions.one, CardSide.Front);
let cardInfo15 = new CardInfo(CardNumber.fifthteen, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);

let cardInfo16 = new CardInfo(CardNumber.sixthteen, CardPower.allCardsIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo17 = new CardInfo(CardNumber.seventeen, CardPower.cardsIntoPast, CardNumberActions.one, CardSide.Front);
let cardInfo18 = new CardInfo(CardNumber.eightteen, CardPower.cardsFromPast, CardNumberActions.one, CardSide.Front);
let cardInfo19 = new CardInfo(CardNumber.nineteen, CardPower.cardIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo20 = new CardInfo(CardNumber.twenty, CardPower.drawOne, CardNumberActions.one, CardSide.Front);
let cardInfo21 = new CardInfo(CardNumber.twentyOne, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);
let cardInfo22 = new CardInfo(CardNumber.twentyTwo, CardPower.exchangeCard, CardNumberActions.one, CardSide.Front);
let cardInfo23 = new CardInfo(CardNumber.twentyThree, CardPower.cardsIntoPast, CardNumberActions.one, CardSide.Front);
let cardInfo24 = new CardInfo(CardNumber.twentyFour, CardPower.allCardsIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo25 = new CardInfo(CardNumber.twentyFive, CardPower.cardsIntoPast, CardNumberActions.one, CardSide.Front);
let cardInfo26 = new CardInfo(CardNumber.twentySix, CardPower.allCardsIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo27 = new CardInfo(CardNumber.twentySeven, CardPower.drawOne, CardNumberActions.one, CardSide.Front);
let cardInfo28 = new CardInfo(CardNumber.twentyEight, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);
let cardInfo29 = new CardInfo(CardNumber.twentyNine, CardPower.belowTheStack, CardNumberActions.one, CardSide.Front);
let cardInfo30 = new CardInfo(CardNumber.thirty, CardPower.cardsFromPast, CardNumberActions.one, CardSide.Front);
let cardInfo31 = new CardInfo(CardNumber.thirtyOne, CardPower.drawOne, CardNumberActions.one, CardSide.Front);
let cardInfo32 = new CardInfo(CardNumber.thirtyTwo, CardPower.cardIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo33 = new CardInfo(CardNumber.thirtyThree, CardPower.exchangeCard, CardNumberActions.one, CardSide.Front);
let cardInfo34 = new CardInfo(CardNumber.thirtyFour, CardPower.drawOne, CardNumberActions.one, CardSide.Front);
let cardInfo35 = new CardInfo(CardNumber.thirtyFive, CardPower.allCardsIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo36 = new CardInfo(CardNumber.thirtySix, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);
let cardInfo37 = new CardInfo(CardNumber.thirtySeven, CardPower.resetCandies, CardNumberActions.one, CardSide.Front);
let cardInfo38 = new CardInfo(CardNumber.thirtyEight, CardPower.allCardsIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo39 = new CardInfo(CardNumber.thirtyNine, CardPower.exchangeCard, CardNumberActions.one, CardSide.Front);
let cardInfo40 = new CardInfo(CardNumber.forty, CardPower.cardIntoFuture, CardNumberActions.one, CardSide.Front);
let cardInfo41 = new CardInfo(CardNumber.fortyOne, CardPower.cardsIntoPast, CardNumberActions.one, CardSide.Front);
let cardInfo42 = new CardInfo(CardNumber.fortyTwo, CardPower.belowTheStack, CardNumberActions.one, CardSide.Front);
let cardInfo43 = new CardInfo(CardNumber.fortyThree, CardPower.exchangeCard, CardNumberActions.one, CardSide.Front);
let cardInfo44 = new CardInfo(CardNumber.fortyFour, CardPower.cardsFromPast, CardNumberActions.one, CardSide.Front);
let cardInfo45 = new CardInfo(CardNumber.fortyFive, CardPower.takeCandy, CardNumberActions.zero, CardSide.Front);
let cardInfo46 = new CardInfo(CardNumber.fortySix, CardPower.drawOne, CardNumberActions.one, CardSide.Front);
let cardInfo47 = new CardInfo(CardNumber.fortySeven, CardPower.drawOne, CardNumberActions.three, CardSide.Front);
let cardInfo48 = new CardInfo(CardNumber.fortyEight, CardPower.drinkCofee, CardNumberActions.zero, CardSide.Front);

const timeout: number = 200;
const max_candies: number = 10;

@Injectable({
  providedIn: 'root'
})
export class MainGameServiceService {
  public drawCards: Array<CardInfo>;
  public presentCards: Array<CardInfo>;
  public pastCards: Array<CardInfo>;
  public futureCards: Array<Array<CardInfo>>;
  public futureIndex: number;
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
    this.futureCards = [];
    this.candies = 7;
    this.cofees = 7;
    this.sortedCards = 0;
    this.futureIndex = 0;
  }


  async draw3Cards() {
    await this.draw1Card();
    await this.draw1Card();
    await this.draw1Card();
    this.checkForSortedCards();
  }

  async draw2CardsPower(): Promise<void> {
    await this.draw1Card();
    await this.draw1Card();
    this.checkForSortedCards();
  }

  async draw1CardPower(): Promise<void> {
    await this.draw1Card();
    this.checkForSortedCards();
  }


  async draw1Card(): Promise<void> {
    let cardDrawn = null;
    if (this.drawCards.length > 0) {
      cardDrawn = this.drawCards.shift() as CardInfo;
    } else {
      cardDrawn = this.pastCards.shift() as CardInfo;
    }
    this.presentCards.push(cardDrawn);

    if (cardDrawn.cardPower == CardPower.takeCandy && this.candies < max_candies) {
      this.candies++;
      window.dispatchEvent(new Event('updateCandies-event'));
    }

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
      await new Promise(resolve => setTimeout(resolve, timeout));
      this.addSortedCard();

      window.dispatchEvent(new Event('updatedSortedCards-event'));
      if (this.drawCards.length > 0 || this.pastCards.length > 0) {
        await this.draw1Card();
      }
    }
  }

  async toPast() {
    console.log("ADRIAN 1111");
    let bonusCandies = Math.min(this.sequenceRuleBonus(), max_candies - this.candies);
    console.log(bonusCandies);
    this.candies = this.candies + bonusCandies;
    window.dispatchEvent(new Event('updateCandies-event'));

    while (this.presentCards.length > 0) {
      await this.toPast1Card();
    }

    await this.backToDrawStack();
    if (this.futureIndex <= 0) {
      await this.draw3Cards();
    } else {
      await this.fromFutureAll();
    }
  }

  async fromFutureAll() {
    console.log('ADRIAN 12121');
    console.log(this);
    console.log(this.futureCards);
    console.log(this.futureIndex);
    let lastFutureCards = this.futureCards[this.futureIndex - 1] as Array<CardInfo>;

    while (lastFutureCards.length > 0) {
      this.presentCards.push(lastFutureCards.shift() as CardInfo);
      await new Promise(resolve => setTimeout(resolve, timeout));
    }
    this.futureCards.pop();
    window.dispatchEvent(new Event('updateFutureCards-event'));
    this.futureIndex--;
  }



  async toPast1Card() {
    let removedCard = this.presentCards.shift() as CardInfo;
    this.pastCards.push(removedCard);
    if (removedCard.cardNumber == 48) {
      this.cofees--;
      window.dispatchEvent(new Event('updatedCofees-event'));
    }
    removedCard.cardAvailableActions = removedCard.cardNumberActions;
    await new Promise(resolve => setTimeout(resolve, timeout));
  }



  async backToDrawStack() {
    while (this.pastCards.length > 3) {
      this.drawCards.push(this.pastCards.shift() as CardInfo);
      await new Promise(resolve => setTimeout(resolve, timeout));
    }
  }

  async belowTheDrawStack() {
    while (this.presentCards.length > 0) {
      let removedCard = this.presentCards.shift() as CardInfo;
      this.drawCards.push(removedCard);
      removedCard.cardAvailableActions = removedCard.cardNumberActions;
      await new Promise(resolve => setTimeout(resolve, timeout));
    }
    this.draw3Cards();
  }

  async getLast2FromPast() {
    await this.getLastFromPast();
    await this.getLastFromPast();
    this.checkForSortedCards();
  }

  async getLastFromPast() {
    if (this.pastCards.length <= 0) {
      return;
    }

    let removedCard = this.pastCards.pop() as CardInfo;
    this.presentCards.push(removedCard);
    await new Promise(resolve => setTimeout(resolve, timeout));
  }

  addSortedCard() {
    this.sortedCards++;
  }



  async toFutureAll() {
    this.futureCards.push([]);
    window.dispatchEvent(new Event('updateFutureCards-event'));
    while (this.presentCards.length > 0) {
      this.futureCards[this.futureIndex].push(this.presentCards.shift() as CardInfo);
      await new Promise(resolve => setTimeout(resolve, timeout));
    }

    this.futureIndex++;
    await this.draw3Cards();
  }

  toFuture1Card() {

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

  consumeCandy() {
    if (this.candies == 0) {
      return;
    }
    this.candies--;
    window.dispatchEvent(new Event('updateCandies-event'));
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

  sequenceRuleBonus(): number {
    let currentIndex = 0;
    let bonus = 0;
    while (currentIndex <= this.presentCards.length - 3) {
      let foundSequence = false;
      while (currentIndex <= (this.presentCards.length - 3) && this.presentCards[currentIndex + 2].cardNumber == (this.presentCards[currentIndex + 1].cardNumber + 1) && this.presentCards[currentIndex + 2].cardNumber == (this.presentCards[currentIndex].cardNumber + 2)) {
        bonus += 1;
        console.log("ADRIAN 2222")
        foundSequence = true;
        currentIndex++;
      }

      if (foundSequence) {
        bonus += 1;
      }

      currentIndex++;
    }
    return bonus;
  }

  resetCandies() {
    for (let i = 0; i < this.presentCards.length; i++) {
      if (this.presentCards[i].cardNumber == CardNumber.thirtySeven) {
        continue;
      }

      this.presentCards[i].cardAvailableActions = this.presentCards[i].cardNumberActions;

    }
    window.dispatchEvent(new Event('updateCardImage-event'));

    for (let i = 0; i < this.futureCards.length; i++) {
      for (let j = 0; j < this.futureCards[i].length; j++) {
        this.futureCards[i][j].cardAvailableActions = this.futureCards[i][j].cardNumberActions;
      }
    }


    window.dispatchEvent(new Event('updateFutureCards-event'));
    window.dispatchEvent(new Event('updateCardImage-event'));
  }

  getImgUrl(cardInfo: CardInfo, cardSize: string) {
    let result = "";
    let c = cardInfo as CardInfo;
    if (cardSize == "normal") {
      if (cardInfo.cardSide == CardSide.Front) {
        if (c.cardAvailableActions == c.cardNumberActions) {
          result = "../../../assets/cards/" + cardInfo.cardNumber + "_card.png";
        } else if (c.cardNumber == CardNumber.fortySeven) {
          result = "../../../assets/cards/" + cardInfo.cardNumber + "_cardc_"+ (c.cardNumberActions - c.cardAvailableActions)+".png";
        } else {
          result = "../../../assets/cards/" + cardInfo.cardNumber + "_cardc.png";
        } 
      } else {
        result = "../../../assets/cards/back_card.png";
      }
    } else if (cardSize == "medium") {
      if (cardInfo.cardSide == CardSide.Front) {
        result = "../../../assets/cards/" + cardInfo.cardNumber + "_card_medium.png";
      } else {
        result = "../../../assets/cards/back_card_medium.png";
      }
    } else {
      if (cardInfo.cardSide == CardSide.Front) {
        if (c.cardAvailableActions == c.cardNumberActions) {
          result = "../../../assets/cards/" + cardInfo.cardNumber + "_card_small.png";
        } else if (c.cardNumber == CardNumber.fortySeven) {
          result = "../../../assets/cards/" + cardInfo.cardNumber + "_cardc_"+ (c.cardNumberActions - c.cardAvailableActions)+"_small.png";
        } else {
          result = "../../../assets/cards/" + cardInfo.cardNumber + "_cardc_small.png";
        } 

      } else {
        result = "../../../assets/cards/back_card_small.png";
      }
    }
    return result;
  }

}
