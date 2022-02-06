import { Component, HostListener, OnInit } from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { MainGameServiceService } from 'src/app/services/main-game-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public exchangeCardInProgress: boolean = false;

  public cardToFutureInProgress: boolean = false;
  
  public cardsToPastInProgress: boolean = false;

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
}
