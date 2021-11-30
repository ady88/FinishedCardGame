import { CardPower as CardPower } from '../model/CardPower';
import { CardNumberActions as CardNumberActions } from '../model/CardNumberActions';
import { CardNumber as CardNumber } from '../model/CardNumber';
import { CardSide } from './CardSide';

export class CardInfo {
    cardPower: CardPower;
    cardNumberActions: CardNumberActions;
    cardAvailableActions: number;
    cardNumber: CardNumber;
    cardSide: CardSide;

    constructor(cardNumber: CardNumber, cardPower: CardPower, cardNumberActions: CardNumberActions, cardSide: CardSide) {
        this.cardNumber = cardNumber;
        this.cardPower = cardPower;
        this.cardNumberActions = cardNumberActions;
        this.cardAvailableActions = cardNumberActions.valueOf();
        this.cardSide = cardSide;
    }
}