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

  getBackgroundImageUrl(i: number) {
    this.backgroundImage = "url(../../../assets/backgroud/"+ i + ".png)";
  }

  @HostListener('window:updateBackgroundImage-event', ['$event'])
  updateBackgroundImage(event: any) {
    this.updateImage();
  }

  async updateImage() {

    for (let i = 0; i <= this.service.getSortedCards(); i++) {
      console.log ("Block statement execution no." + i);
      if (i != 48) {
        this.backgroundImage1 ="url(../../../assets/backgroud/"+ (i + 1) + ".png)";
      }
      this.getBackgroundImageUrl(i);
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    window.dispatchEvent(new Event('updatedGameFinished-event'));
  }
}
