import {Component, OnInit, ViewEncapsulation,OnChanges, SimpleChanges, Input} from '@angular/core';
import {Chart} from 'chart.js';
import {RoundProgressEase} from 'angular-svg-round-progressbar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PopupModalComponent} from './popupmodal.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { DataService } from "app/data.service";
import { slaMetrics, slaMetric, slaList } from "app/dashboard/dashboard.component";




@Component({
        selector: 'chart-horizontal',
        templateUrl:'./horizontalbarchart.component.html',
        styleUrls: ['./horizontalbarchart.component.scss'],
        encapsulation: ViewEncapsulation.None
})


export class HorizontalBarChartComponent implements OnInit  {
    @Input() tab: String;
    @Input() content: any;
    elementsCard:slaList[];
    commentSection: boolean=false;
    reasonSection: boolean=false;
    
       
  constructor(public dialog: MatDialog, private http:Http,private _slaTrends: DataService) {}

  openDialog(slaName): void {
    let dialogRef = this.dialog.open(PopupModalComponent, {
      width: '765px',
      height: '540px',
      id: slaName
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  toggleComment(){
      this.commentSection=false;
      this.reasonSection=true;
      console.log(this.commentSection);
  }

  toggleReason(){
      this.commentSection=true;
      this.reasonSection=false;
      console.log(this.commentSection);
  }


ngOnInit() {

     this._slaTrends.getLatestSLA().subscribe((data) => {
          let arraySLA = <slaMetric> data;
          let slametric = arraySLA["slametrics"];
          this.elementsCard = slametric["slalList"]; 
          
            console.log(slametric["slalList"]);

        // for(let date in slametric)
        // {
        //     console.log("inLoop"+date["slalList"]);
            
        //     for(let list in date["slalList"])
        //     {
        //         console.log("inLoop"+list["slaname"]);
        //     }
        // }





        //   let slaDate = sla.map((element) => {
        //         return element["date"];
        //   });


        //  let slaList:slaList[] = sla.map((element) => {

        //     return element["slalList"];
        //  });


        //  let slaName = slaList.map((element,index) => {
        //         let slalist:slaList = element[index];
        //         return slalist["slaname"];
        //  });
         
         
        //  let slaGoal = slaList.map((element,index) => {
        //         let slalist:slaList = element[index];
        //         return slalist["slagoal"];
        //  });
         


        //  let slaAchieved = slaList.map((element,index) => {
        //         let slalist:slaList = element[index];
        //         return slalist["slaachieved"];
        //  });
         

        //  let slaReason = slaList.map((element,index)=> {
        //         let slalist:slaList = element[index];  
        //         return slalist["sla_reasons"];   
        //  });

        //  var finalObject = [ 
        //      ""
        //  ]


        //  console.log(slaName);
        //  console.log(slaGoal);
        //  console.log(slaAchieved);
        //  console.log(slaReason);

     });  

}



}

