import { Component, HostListener, OnInit } from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeIn', [
      state('ease-in', style({ 'opacity': '1' })),
      state('ease-out', style({ 'opacity': '0.25' })),
      transition('* => *', [
        animate("0.03s")
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  public exchangeCardInProgress: boolean = false;

  public cardToFutureInProgress: boolean = false;

  public cardsToPastInProgress: boolean = false;

  public backgroundImage: string = "url(../../../assets/backgroud/0.png)";
  public backgroundImage1: string = "url(../../../assets/backgroud/0.png)";

  public state: string = 'in';
  public counter: number = 0;
  public enableAnimation: boolean = false;

  constructor(private service: MainGameServiceService) { }

  ngOnInit(): void {
  }

  @HostListener('window:exchangeCard-event', ['$event'])
  updateExchangeCardActionStatus(event: any) {
    this.exchangeCardInProgress = this.service.isExchangeCardInProgress();
    console.log("ADRIAN 443434343434");
  }

  @HostListener('window:cardToFuture-event', ['$event'])
  updateCardToFutureActionStatus(event: any) {
    this.cardToFutureInProgress = this.service.isCardToFutureInProgress();
    console.log("ADRIAN 2222222222222222");
    console.log(this.cardToFutureInProgress);
  }

  @HostListener('window:cardsToPast-event', ['$event'])
  updateCardsToPastActionStatus(event: any) {
    this.cardsToPastInProgress = this.service.isCardsToPastInProgress();
    console.log("ADRIAN 2222222222222222");
    console.log(this.cardsToPastInProgress);
  }

  getBackgroundImageUrl() {
    this.backgroundImage = this.service.getBackgroundImageUrl();
  }

  @HostListener('window:updateBackgroundImage-event', ['$event'])
  updateBackgroundImage(event: any) {
    // this.backgroundImage = this.service.getBackgroundImageUrl();
    this.runAnimation();
  }

  runAnimation() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  onDone($event: any) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        var sortedCards = this.service.getSortedCards() + 1;
        this.backgroundImage1 ="url(../../../assets/backgroud/"+ sortedCards + ".png)";

         this.getBackgroundImageUrl();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }
}
