import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    
                    var ctx = document.getElementById("member-main-chart");
                    var myPieChart = new Chart(ctx,{
                            type: 'doughnut',
                            // datasets: { data: [10, 20, 30],
                            //  labels: ['Red','Yellow','Blue'],
                            //  backgroundColor: [
                            // 'rgba(255, 99, 132, 0.2)',
                            // 'rgba(54, 162, 235, 0.2)',
                            // 'rgba(255, 206, 86, 0.2)'] }
                                        data: {
                              labels: ["Individual On Exchange", "Medsup", "Large Group", "Small Group", "Individual On Exchange"],
                              datasets: [{
                                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                                data: [2478,5267,734,784,433]
                              }]
                            }
                                    });


                      var ctx1 = document.getElementById("combined-main");
                      var myPolar = new Chart(ctx1,{
                            type: 'polarArea',
                            data: {
                              labels: ["Individual On Exchange", "Medsup", "Large Group", "Small Group", "Individual On Exchange"],
                              datasets: [
                                {
                                  label: "Population (millions)",
                                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                                  data: [2478,5267,734,784,433]
                                }
                              ]
                            },
                            options: {
                              title: {
                                display: true,
                                text: 'Predicted world population (millions) in 2050'
                              }
                            }
                                    });

  }

}