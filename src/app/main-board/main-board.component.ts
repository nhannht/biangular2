import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {
  @Input()
  choosenValue:string="ETHBTC";

  @Output()
  emitter :EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  setChoosenValue($event:string){
    this.choosenValue = $event;
    this.emitter.emit(this.choosenValue);
  }

}
