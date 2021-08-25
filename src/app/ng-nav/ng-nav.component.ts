import {Component, Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-ng-nav',
  templateUrl: './ng-nav.component.html',
  styleUrls: ['./ng-nav.component.css']
})
export class NgNavComponent {
  @Input()
  choosenValue: string = "ETHBTC";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver) {
  }

  setChoosenValue($event: string) {
    this.choosenValue = $event;

  }
}
