import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AllDayData} from "./all-day-data";

@Injectable({
  providedIn: 'root'
})
export class Fetch24HoursDataService implements OnInit {
  private _url = 'https://api.binance.com/api/v3/ticker/24hr?symbol='

  constructor(private _http:HttpClient) { }
  ngOnInit() {
  }
  fetchData(symbol:string):Observable<AllDayData>{
    return this._http.get<AllDayData>(this._url + symbol)

  }

}
