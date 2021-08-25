import {AfterContentInit, Component, Input, OnInit, Output} from '@angular/core';
import {AllSymbolPriceService} from "../all-symbol-price.service";
import {from, Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, find, map, startWith, switchMap} from "rxjs/operators";
import { EventEmitter } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatAutocompleteActivatedEvent} from "@angular/material/autocomplete";
import {TwentyFourHoursDashboardComponent} from "../twenty-four-hours-dashboard/twenty-four-hours-dashboard.component";

@Component({
  selector: 'app-search-board',
  templateUrl: './search-board.component.html',
  styleUrls: ['./search-board.component.css']
})
export class SearchBoardComponent implements OnInit {
  symbols: string[] = [];
  searchString = new FormControl();
  results!:Observable<string[]>;
  @Input()
  choosenValue:string="";
  @Output()
  choosenEmitter = new EventEmitter<string>();

  constructor(private _allSymbolsService:AllSymbolPriceService,
              ) { }

  ngOnInit(): void {
    this._allSymbolsService.choosenValue = this.choosenValue;
    this._allSymbolsService.getRawData().subscribe(
      symbols => {
       this.symbols=  symbols.map(s => s.symbol)
      }
    );
    this.results = this.searchString.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )


  }

  private _filter(value:string):string[]{
    return this.symbols.filter(symbol => symbol.indexOf(value) != -1).slice(0,10);
  }

  choose(result: string) {
    this.choosenValue = result;
    this.choosenEmitter.emit(this.choosenValue);
    this._allSymbolsService.choosenValue = result;
    // this._twentyHoutCom.choosenValue = result;

  }

}
