import {Component, OnInit, ViewEncapsulation,OnChanges, SimpleChanges, Input, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';
import {RoundProgressEase} from 'angular-svg-round-progressbar';
import { slaMetrics, slaList } from "app/dashboard/dashboard.component";
import { DataService } from "app/data.service";
import { DatePipe } from '@angular/common'

@Component({
        selector: 'chart-bar',
        template:' <a class="text-success" *ngIf="trending">  <center><i class="material-icons">trending_up</i>TRENDING</center> </a> <a class="text-danger" *ngIf="!trending">  <center><i class="material-icons">trending_down</i><strong>TRENDING</strong></center> </a>  <div *ngIf="slaname!=Null"> <canvas [id]="slaname" width="200" height="120"></canvas> </div>',
        styleUrls: ['./horizontalbarchart.component.scss'],
        encapsulation: ViewEncapsulation.None
})


export class BarChartsComponent implements OnInit, AfterViewInit {

    // current: number = 27;
    // max: number = 100;
    // semicircle: boolean = false;
    // radius: number = 45;
    @Input() slaname: string;
  //<canvas id="id" width="200" height="120"> {{id}} </canvas>
    data: number[];
    dataAc: number[];
    label: any[];
    //bgColor =  "['rgba(125, 199, 89, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 99, 132, 0.2)']" ;//= this.backgroundColor();
    //borColor: any ;//= this.backgroundColor();
    trending: boolean;    


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


constructor(private _slaTrends: DataService, public datepipe: DatePipe) { }
ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.backgroundColor();
    this._slaTrends.getTrendMetrics().subscribe((data) => {

          let arraySLA = <slaMetrics> data;
          let slametric = arraySLA.slametrics;
          let slaname; 
          let slaGoal = [];
          let slaDate:any[];
          let slaAchieved = [];
     
          let finalJson = {};
        //   {
        //       "slaName": slaname, 
        //       "slaGoal" : slaGoal,
        //       "details": [ {
        //             "slaDate" : date,
        //             "slaAchieved": slaAchieved 
        //       }          
        //     ]
        //   }
          let finalJsonArray:any[]
          
        
         slaDate = slametric.map((element) => {
             //console.log(element["date"]);
             let x = element["date"];
             x= new Date(x);
             let latest_date = this.datepipe.transform(x,'MM/dd');
             console.log(latest_date);
             return latest_date;
         }) 
         console.log(slaDate);
         this.label=slaDate
        //  slaDate.forEach((date:any) => {
        //   date=new Date();
        //   let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');
        //   this.label.push(latest_date);
        //   });
       

         let slalists:slaList[] = slametric.map((element) => {
               
               element["slalList"].forEach((slalist:slaList,index) => {
             // console.log("hello");
             // console.log(slalist);
              if(this.slaname == slalist["slaname"] )
              {
                  slaGoal.push(slalist["slagoal"]);
                  slaAchieved.push(slalist["slaachieved"]);
                //   console.log(slalist["slaname"]);
                //   console.log(slalist["slaachieved"]);
              }
                    
        
                });

              // console.log(element["slalList"]);
               return element["slalList"];
         });

         
          //console.log("slagoal"+slaGoal);
         this.data=slaGoal;
         this.dataAc=slaAchieved;
        //console.log("after"+this.data);

        var slaAc= this.dataAc;

        


    //CLAIMS
    var ctx = document.getElementById(this.slaname);


    var randomColorPlugin = {

    // We affect the `beforeUpdate` event
    beforeUpdate: function(chart) {
        var backgroundColor = [];
        var borderColor = [];
        //var dataA=this.goals();
        //console.log(dataA)
       
        // For every data we have ...
        for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
            
            var m=chart.config.data.datasets[0].data[i];
            if(m>=slaAc[i] || m==100)
        	{// We generate a random color}
        	var color = "rgba(125,199,89"  + ",";
            }
            else if(m<slaAc[i] && m>=(slaAc[i]/2)){
                var color = "rgba(255, 206, 86"  + ",";
            }
            else{
                var color = "rgba(255, 99, 132"  + ",";
            }
            // We push this new color to both background and border color arrays
            backgroundColor.push(color + "0.2)");
            borderColor.push(color + "1)");
        }
        
        chart.config.data.datasets[0].backgroundColor = backgroundColor;
        chart.config.data.datasets[0].borderColor = borderColor;
        }
    };
    //Chart.pluginService.register(randomColorPlugin);


    var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: this.label,
        datasets: [{
            label: 'Goals Achieved',
            data: this.dataAc,
            backgroundColor: ['rgba(125, 199, 89, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(125, 199, 89, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 99, 132, 0.2)'],
            borderWidth: 1
        }]
    },
    options: this.options,
    plugins: randomColorPlugin
});
console.log(slaAc[2]);

if(slaAc[1]=slaAc[2])
        {
            this.trending=true;
            console.log(this.trending);
        }
        else if(slaAc[1]<slaAc[2])
        {
            this.trending=false;
            console.log(this.trending);
        }
        else
        {
            this.trending=false;
            console.log(this.trending);
        }

    });

}



ngAfterViewInit() {
   

    }

}