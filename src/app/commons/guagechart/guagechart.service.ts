import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {IGuageChart} from './guagechart';

@Injectable()
export class GuageChartService {

    apiRoot:string = 'http://localhost:8080/dashboard/';
    results:any[];
    loading:boolean;
    public slaData: any[]; 
    promiseResponse: Promise<IGuageChart[]>
    errorMessage: String;

     constructor(private http:Http) {
         
     }




 getSLA() : any {

       let apiURL = `${this.apiRoot}current_month`;
       return  this.http.get(apiURL).map(response => response.json());
       
                                                                                            

 }


}