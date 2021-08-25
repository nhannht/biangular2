import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Avgprice} from "./avgprice";

@Injectable({
  providedIn: 'root'
})
export class AvgPriceService {
  private _url:string = "http://api.binance.com/api/v3/avgPrice?symbol=";

  constructor(private _httpClient: HttpClient) {
  };

  getData(symbol: String = 'ETHBTC'): Observable<Avgprice> {
    return this._httpClient.get<Avgprice>(this._url + symbol);
  }

}
