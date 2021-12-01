import { Injectable } from '@angular/core';
import { CardInfo as CardInfo } from '../model/CardInfo'
import { CardNumber } from '../model/CardNumber';
import { CardNumberActions } from '../model/CardNumberActions';
import { CardPower } from '../model/CardPower';
import { CardSide } from '../model/CardSide';


let cardInfo1 = new CardInfo(CardNumber.one, CardPower.start, CardNumberActions.zero, CardSide.Back);
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

let cardInfo48 = new CardInfo(CardNumber.fortyEight, CardPower.drinkCofee, CardNumberActions.zero, CardSide.Back);

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
      cardInfo21, cardInfo22, cardInfo23, cardInfo24, cardInfo25, cardInfo26, cardInfo27, cardInfo28, cardInfo29, cardInfo30];
    
    this.shuffle(this.drawCards) ;
    this.drawCards.push(cardInfo48);
    this.presentCards = [];
    this.pastCards=[];
    this.futureCards = [[]];
    this.candies = 10;
    this.cofees = 7;
    this.sortedCards = 0;
  }

  draw3Cards() {
    this.presentCards.push(this.drawCards.shift() as CardInfo);
    this.presentCards.push(this.drawCards.shift() as CardInfo);
    this.presentCards.push(this.drawCards.shift() as CardInfo);
  }

  toPast() {
    while (this.presentCards.length > 0) {
      this.pastCards.push(this.presentCards.shift() as CardInfo);
      
    }
  }

  toFutureAll() {
    while (this.presentCards.length > 0) {
      this.futureCards[0].push(this.presentCards.shift() as CardInfo);
      
    }
  }

  getDrawCards() {
    return this.drawCards.slice();
  }

  getPresentCards() {
    return this.presentCards;
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
    let currentIndex = array.length,  randomIndex;
  
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


}
