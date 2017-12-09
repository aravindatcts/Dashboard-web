import {Component, ViewEncapsulation, OnChanges, Input, OnInit} from '@angular/core';
import {RoundProgressEase} from 'angular-svg-round-progressbar';
import {GuageChartService} from './guagechart.service';
import {IGuageChart} from './guagechart';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'guage-chart',
    templateUrl:'./guagechart.component.html',
    styleUrls: ['./guagechart.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [GuageChartService]
})

export class GuageChartComponent implements OnInit {

                                                                    // @Input() stype: string;
    @Input() slaData : IGuageChart[];
    @Input() slaGoal: any;
    @Input() slaAchieved: any;
                                                                    // current: any;
                                                                    // goal: any;
    max: number = 100;
    semicircle: boolean = false;
    radius: number = 45;
                                                                    //slaData: IGuageChart[]; 
                                                                    // promiseResponse: Promise<IGuageChart[]>
                                                                    //  errorMessage: String;
    
    constructor(private _slaGuage: GuageChartService){
    }
   
     public ColorCode(): string {

         if (this.slaAchieved >= this.slaGoal || this.slaAchieved == 100) {
             return 'rgba(76, 175, 80, 0.5)';
         }
         else if (this.slaAchieved  < this.slaGoal && this.slaAchieved  >= (this.slaGoal / 2)) {
             return 'rgba(255, 109, 0, 0.5)';
         }
         else if (this.slaAchieved  == 'N/A') {
             return 'N/A'
         }
         else {
             return 'rgba(255, 99, 132, 0.5)';
         }
                                                                    //  if (this.current >= this.goal || this.current == 100) {
                                                                    //      return 'rgba(76, 175, 80, 0.5)';
                                                                    //  }
                                                                    //  else if (this.current < this.goal && this.current >= (this.goal / 2)) {
                                                                    //      return 'rgba(255, 109, 0, 0.5)';
                                                                    //  }
                                                                    //  else if (this.current == 'N/A') {
                                                                    //      return 'N/A'
                                                                    //  }
                                                                    //  else {
                                                                    //      return 'rgba(255, 99, 132, 0.5)';
                                                                    //  }
         }

     ngOnInit() {

         console.log("Outside then");
                                                                    //  this._slaGuage.getSLA().subscribe((data) => {
                                                                    //      console.log("Inside Then");
                                                                    //      this.displayInfo(data);
                                                                    //  }
                                                                    //  );
     }


                                                                    //  displayInfo(dataInfo: IGuageChart[]) {
                                                                    //      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
                                                                    //      //Add 'implements OnChanges' to the class.

                                                                    //      this.slaData = dataInfo;
                                                                    //      for (var i = 0; i < this.slaData.length; i++) {

                                                                    //          if (this.stype == this.slaData[i].slaType.trim()) {
                                                                    //              this.current = this.slaData[i].slaAchieved;
                                                                    //              this.goal = this.slaData[i].slaGoal;
                                                                    //              break;
                                                                    //          }
                                                                    //          else {
                                                                    //              console.log(this.stype);
                                                                    //               this.current = 'N/A';
                                                                    //              this.goal = 'N/A';
                                                                    //          }
                                                                    //      }
                                                                    //  }

    getOverlayStyle() {
        let isSemi = this.semicircle;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '20%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 3.5 + 'px'
        };
    }


}