import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ChartsModule} from 'ng2-charts';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchBoardComponent} from './search-board/search-board.component';
import {AvgPriceDashboardComponent} from './avg-price-dashboard/avg-price-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {MultipriceTrackingDashboardComponent} from './multiprice-tracking-dashboard/multiprice-tracking-dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgNavComponent} from './ng-nav/ng-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {TwentyFourHoursDashboardComponent} from './twenty-four-hours-dashboard/twenty-four-hours-dashboard.component';
import {MainBoardComponent} from './main-board/main-board.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainBoardComponent,
  },
  {
    path: '24hour',
    component: TwentyFourHoursDashboardComponent,
  },
  {
    path: '',
    redirectTo: '/main', pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent },
  // {
  //   path:'price',
  //   component:AvgPriceDashboardComponent
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBoardComponent,
    AvgPriceDashboardComponent,
    MultipriceTrackingDashboardComponent,
    NgNavComponent,
    TwentyFourHoursDashboardComponent,
    MainBoardComponent,
    PagenotfoundComponent,
  ],
  imports: [
    FlexLayoutModule,
    MatInputModule,
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
