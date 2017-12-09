import {Component, Inject, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Chart} from 'chart.js';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { DataService } from "app/data.service";
import { slaMetrics, slaMetric, slaList } from "app/dashboard/dashboard.component";

@Component({
  selector: 'dashboard-popup',
  templateUrl: 'popupmodal.component.html',
   styleUrls: ['popupmodal.component.scss'],
})
export class PopupModalComponent implements AfterViewInit {

    combinedName: string;
 
        commentSection: boolean=false;
        reasonSection: boolean=false;
        slaData: any[];
        lobName: any[];

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



 //[{"Name": "First Pass Rate","chart":"ch1"},{"Name": "First Pass Rate 2", "chart":"ch2"}];
//   @ViewChild("chart") mChart: ElementRef;
  chartId: any ='';
  dataSets: any[]
  options: any = {
        legend: {
            display: false
        },
        animation: {
            duration: 5000,
        },
        scales: {

            xAxes: [{
                display: true,
                barPercentage: 0.1,
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }


  constructor(
    public dialogRef: MatDialogRef<PopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http:Http, private _slaTrends: DataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.combinedName =  this.dialogRef.id;
      
  }

  ngAfterViewInit(){
   
   
   let slaName = this.dialogRef.id;

     this._slaTrends.getMetricsSLAName(slaName).subscribe((data) => {
          let arraySLA = <any> data;
          let slametric = arraySLA["slametrics"];
          this.slaData = slametric.map((element) => {
                return element["slaList"];  
          }) 
          this.lobName= slametric.map((element) => {
              return element["lobname"];
          });

         console.log(slametric);
          //this.slaData = slametric["slaList"]; 
          console.log(this.lobName);

     });  














    // this._slaTrends.getLatestSLA().subscribe((data) => {
    //       let arraySLA = <slaMetric> data;
    //       let slametric = arraySLA["slametrics"];
    //      // this.slaData = slametric["slalList"]; 
          
    //         console.log(slametric);


    //  });  

     //CLAIMS
//     var ctx = document.getElementById("ch1");
//     var myChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Feb", "Jan", "Dec"],
//         datasets: [{
//             label: '# of Votes',
//             data: [84.6, 81.3, 89.5],
//             backgroundColor: [
//                 'rgba(125, 199, 89, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(255, 99, 132, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(125, 199, 89, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(255,99,132,1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: this.options
//     });


//     var ptx = document.getElementById("ch2");
//     var pChart = new Chart(ptx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Feb", "Jan", "Dec"],
//         datasets: [{
//             label: '# of Votes',
//             data: [49.6, 58.3, 77.5],
//             backgroundColor: [
//                 'rgba(125, 199, 89, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(255, 99, 132, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(125, 199, 89, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(255,99,132,1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: this.options
// });


  }

}