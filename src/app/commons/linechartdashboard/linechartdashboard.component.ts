import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {Chart} from 'chart.js';
import * as FileSaver from 'file-saver';


@Component({
    selector: 'line-dashboard',
  templateUrl: './linechartdashboard.component.html',
  styleUrls: ['./linechartdashboard.component.scss']
})


export class LineChartDashboardComponent implements AfterViewInit{

  @Input() type: string;
  showAxes: boolean=true;

  ngAfterViewInit() {
    
    //Random Numbers
  function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }


//Main Chart
  var elements = 27;
  var data1 = [];
  var data2 = [];
  var data3 = [];

  for (var i = 0; i <= elements; i++) {
    data1.push((i*random(80,100)));
    data2.push(random(80,100));
    data3.push(65);
  }

  var data = {
    labels: ['Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16'],
    datasets: [
      {
        label: 'Large Group',
        backgroundColor: 'rgba(30,136,229,0.05)',
        borderColor: 'rgba(30,136,229,1)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: data1
      },
      {
        label: 'Small Group',
        backgroundColor: 'rgba(76, 175, 80,0.08)',
        borderColor: 'rgba(76, 175, 80,1)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: data2
      },
      {
        label: 'Individual',
        backgroundColor: 'transparent',
        borderColor: 'rgb(244, 67, 54)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3
      }
    ]
  };

  var options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(150),
          max: 1000
        }
      }]
    },
    elements: {
      point: {
        radius: 5,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
  };
    
  var ctx = document.getElementById("myChart2");
  var mainChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


}

  chartDownload(id,name,format){
    
    var ctx1 = <HTMLCanvasElement> document.getElementById(id);
    ctx1.toBlob(function(blob) {
        FileSaver.saveAs(blob, name+"_"+Date.now()+format);
    });
  }
 

}