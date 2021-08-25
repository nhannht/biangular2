import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Symbol} from '../symbol';
import {AllSymbolPriceService} from "../all-symbol-price.service";
import {interval, Subscription} from "rxjs";
import {concatMap} from "rxjs/operators";

@Component({
  selector: 'app-multiprice-tracking-dashboard',
  templateUrl: './multiprice-tracking-dashboard.component.html',
  styleUrls: ['./multiprice-tracking-dashboard.component.css']
})
export class MultipriceTrackingDashboardComponent implements OnInit,OnChanges {
  @Input()
  choosenValue!:string ;

  trackingSymbols : string[] = ["ETHBTC"];
  symbolToShow: Symbol[] = [];
  currentSubscription : Subscription = new Subscription();


  constructor(private _allSymbolService : AllSymbolPriceService) { }

  ngOnInit(): void {
    console.log(1);
    this.updateTrackingSymbol();
  }
  ngOnChanges():void {
    if (!this.trackingSymbols.includes(this.choosenValue)){
      this.trackingSymbols.push(this.choosenValue);
    }
    // console.log(2);
    // this.currentSubscription.unsubscribe();

  }
  updateTrackingSymbol(){
    this.currentSubscription = interval(1000).pipe(
      concatMap(() => this._allSymbolService.getRawData())
    ).subscribe(
      fullSymbols => {
        this.symbolToShow =  fullSymbols
          .filter(symbol => this.trackingSymbols.includes(symbol.symbol))
      }

    )
  }


  delete(symbol: string) {
    this.trackingSymbols = this.trackingSymbols.filter(val => val !== symbol);
  }
}
