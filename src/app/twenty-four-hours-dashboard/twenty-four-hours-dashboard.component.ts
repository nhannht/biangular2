import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Fetch24HoursDataService} from "../fetch-24-hours-data.service";
import {interval, Subscription} from "rxjs";
import {concatMap} from "rxjs/operators";
import {AllDayData} from "../all-day-data";
import {AllSymbolPriceService} from "../all-symbol-price.service";

@Component({
  selector: 'app-twenty-four-hours-dashboard',
  templateUrl: './twenty-four-hours-dashboard.component.html',
  styleUrls: ['./twenty-four-hours-dashboard.component.css']
})
export class TwentyFourHoursDashboardComponent implements OnInit,OnDestroy,OnChanges {
  @Input()
  public choosenValue!:string ;

  public data!: AllDayData;
  private currentSubcription!: Subscription;

  constructor(private _allDayService:Fetch24HoursDataService,
              private _allSymbolsService:AllSymbolPriceService
              ) { }

  ngOnInit(): void {
    console.log(1);
    if (!this.choosenValue  ){
      this.choosenValue = this._allSymbolsService.choosenValue;
      if (this.choosenValue === ""){
        this.choosenValue = "ETHBTC"
      }
    } else {
      this.choosenValue = this._allSymbolsService.choosenValue;
    }
    this.updateData();
  }
  ngOnDestroy() {
    this.currentSubcription.unsubscribe()
  }
  ngOnChanges(changes: SimpleChanges) {
    this.choosenValue = this._allSymbolsService.choosenValue;
  }


  private updateData() {
    this.currentSubcription = interval(1000).pipe(
      concatMap(
        () => {
          return this._allDayService.fetchData(this.choosenValue)
        }
      )
    ).subscribe(
      out => this.data = out
    )
  }
}
