import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
// import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';
import 'moment/locale/en-gb';
import { DataService } from '../data.service';
import 'rxjs';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() mdDatepicker: any;
  value:any="month";
  lobview:number= 1;
  days=new Date();
  months=new Date();
  minDate = new Date(2016, 0, 1);
  maxDate = new Date(2018, 0, 1);
  typeView: boolean = false;
  public selectedDate: any= moment();
  startDate = new Date(2012, 0, 1);
  lobName: string= 'Line Of Business';
  lob: any[] = [
    {id: 1, name: 'All LOB\'s'},
    {id: 2, name: 'Large Group'},
    {id: 3, name: 'Small Group'},
    {id: 3, name: 'MedSupp'},
    {id: 4, name: 'Individual Off Exchange'},
    {id: 5, name: 'Individual On Exchange'}
  ];

  slaMetrics:Array<slaMetrics>;
  chartContent: any[];


  // constructor(private datePicker: MdlDatePickerService) { }
  constructor(private _slaTrends: DataService) {}

  ngOnInit() {

    // this._slaTrends.getSLA().subscribe((data) => {
    //                     this.getMetricsInfo(data);
    //                   }
    //        );
   
  }
  
  
 getMetricsInfo(data)
 {

    //  this.slaMetrics = data;
   
    //  let slaDate = [];
    //  let slaList = []; 
     

    //  slaDate.push(this.slaMetrics.map(slaMetric => {
    //       slaMetric.slaDate
    //  } ));     


    // slaList.push(this.slaMetrics.map(slaMetric =>{
    //     slaMetric.slaList
    // }));
     

  }
                      

 
   public monthView($event: MouseEvent)
   {
     console.log(moment(this.months).month());
   }



  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  
}


export interface slaMetrics {
  slametrics:[slaMetric] 
}


export interface slaMetric {
 
    slaDate : any
    monthInd : boolean
    lobName: string
    id: any
    slaList:[slaList]
    

}


export interface slaList {
    
    slaName : string
    slaGoal : number
    slaAchieved : number
    slaReasons : [string]
    slaComment: [slaComments]

}


export interface slaComments { 

      slaUserId : string
      slaUpdatedDate : any
      slaComment: string
}

