import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Symbol} from "./symbol";

@Injectable({
  providedIn: 'root'
})
export class AllSymbolPriceService {
  private _url = 'https://api.binance.com/api/v3/ticker/price';
  symbols:string[] = [];
  choosenValue:string = "";

  constructor(private _httpClient:HttpClient) { }
  getRawData():Observable<Symbol[]>{
    return this._httpClient.get<Symbol[]>(this._url);
  }
  // getOnlySymbols(){
  //   this.getRawData().pipe((result) => {
  //     console.log(result);
  //     return result;
  //   }).subscribe(array => {
  //     var result = array.map(p => p['symbol']);
  //     this.symbols = result;
  //   })
  // }

}
