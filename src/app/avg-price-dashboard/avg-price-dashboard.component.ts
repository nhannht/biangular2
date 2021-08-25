import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {AvgPriceService} from "../avg-price.service";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Label, PluginServiceGlobalRegistrationAndOptions} from "ng2-charts";
import {interval, Subscription} from "rxjs";
import {concatMap, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-avg-price-dashboard',
  templateUrl: './avg-price-dashboard.component.html',
  styleUrls: ['./avg-price-dashboard.component.css']
})
export class AvgPriceDashboardComponent implements OnInit,OnChanges {
  public currentPrice: number = 0;
  public currentTime: string = "";
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartColors!: Color[];
  public lineChartLegend!: boolean;
  public lineChartType: ChartType = "line";
  public lineChartPlugins!: PluginServiceGlobalRegistrationAndOptions[];
  public lineChartOptions!: ChartOptions;
  private currentSubscribe: Subscription = new Subscription();
  @Input() public choosenValue: string = "";

  ngOnChanges(change:SimpleChanges) {
    if (this.choosenValue === ""){
      this.choosenValue = "ETHBTC";
      this.setUpChart();

    }
    else if (!this.lineChartColors){
      this.setUpChart()
    }
    else {
      this.currentSubscribe.unsubscribe();
      this.lineChartData = [
        {
          data: [],
          label: this.choosenValue
        }
      ];
    }
      this.intervalFetchData(this.choosenValue);
  }


  constructor(private avgPriceService: AvgPriceService,
  ) {
  }

  ngOnInit(): void {
    this.setUpChart();
  }

  private setUpChart() {
    this.lineChartData = [
      {
        data: [],
        label: this.choosenValue,
      },
      ]
    this.lineChartLabels = [];
    this.lineChartOptions = {
      tooltips:{
        enabled:false,
      },
      hover: {
        mode:undefined
      },
      responsive: true,
      animation: {
        duration: 1000,
        easing: "easeOutBounce"
      },
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: false
        }]
      }
    };
    this.lineChartLegend = true;
    this.lineChartColors = [
      {
        pointRadius:0,
        backgroundColor: "rgba(175,71,71,0.5)"
      }
    ];
    this.lineChartType = 'line';
    this.lineChartPlugins = [];
  }

  private intervalFetchData(symbol:string) {
    this.currentSubscribe = interval(1000).pipe(
      concatMap(
        () => this.avgPriceService.getData(symbol)
      )
    ).pipe(
      distinctUntilChanged()
    ).subscribe(
      result => {
        let price:number = Number.parseFloat(result.price);
        // @ts-ignore
        this.lineChartData[0].data.push(price * 1000  );
        this.lineChartLabels.push(Math.random().toString());
        this.currentPrice = price;
        this.currentTime = new Date().toLocaleTimeString();
      }

    )
  }
}
