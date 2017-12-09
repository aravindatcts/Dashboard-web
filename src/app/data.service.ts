import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { slaMetrics, slaMetric } from "app/dashboard/dashboard.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  apiRoot:string = 'http://wmkdashboard-env.us-east-2.elasticbeanstalk.com/api/slametrics/';

  getTrendMetrics() :Observable<slaMetrics> {
       let apiURL = `${this.apiRoot}getTrendMetrics?month=false&date=2017-12-08&limit=3`;
       return  this.http.get(apiURL).map((response :Response) => {
           let slametrics = <slaMetrics>response.json();
           return slametrics;
      });
 }



  getLatestSLA() :Observable<slaMetric> {
       let apiURL = `${this.apiRoot}getLatestSlaMetrics?month=false`;
       return  this.http.get(apiURL).map((response :Response) => {
           let slametrics = <slaMetric>response.json();
           return slametrics;
      });
 }


  getMetricsSLAName(slaName:string) :Observable<any> {
    
       let apiURL = `${this.apiRoot}getMetricsForSlaName?month=false&slaname=${slaName}&date=2017-12-09`;
        console.log(apiURL);

       return  this.http.get(apiURL).map((response :Response) => {
           let slametrics = response.json();
           console.log(slametrics);
           return slametrics;
      });
 }

}
