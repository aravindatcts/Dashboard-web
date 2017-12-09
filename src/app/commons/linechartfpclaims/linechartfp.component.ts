
import {Component, OnInit, OnChanges} from '@angular/core';
import {Chart} from 'chart.js';
declare var jquery:any;
declare var $ :any;
import 'chartjs-plugin-zoom';
import * as FileSaver from 'file-saver';


@Component({
    selector: 'line-chartfp',
  templateUrl: './linechartfp.component.html',
  styleUrls: ['./linechartfp.component.scss']
})

export class LineChartFPComponent implements OnInit{

  showCombined: boolean = false; 


  // toggleCombined(element:string){

  // if(document.getElementById('velu').checked==true){
  //     this.shown= true;
  //   }
  //   else if(document.getElementById('velu').checked==false)
  //     this.shown= false;
  
  //   // if(this.showCombined)
  //   // {
  //   //   return 'combined';
  //   // }
  //   // else
  //   // {
  //   //   return 'card-chart2'
  //   // }
  // }

  ngOnInit() {
      //Random Numbers
  function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

    var data = {
       labels: ['1-May', '2-May', '3-May', '4-May', '5-May', '6-May', '7-May', '8-May', '9-May', '10-May', '11-May', '12-May','15-May','16-May','17-May','18-May','19-May','22-May','23-May','24-May','25-May','26-May','30-May','31-May',
              '1-Jun', '2-Jun', '5-Jun', '6-Jun', '7-Jun', '8-Jun', '9-Jun', '12-Jun', '13-Jun', '14-Jun', '15-Jun', '16-Jun','19-Jun','20-Jun','21-Jun','22-Jun','23-Jun','26-Jun','27-Jun','28-Jun','29-Jun','30-Jun'],
    datasets: [
      {
        label: 'Med Supp',
        backgroundColor: 'rgba(30,136,229,0.05)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [84, 85, 82, 81, 80, 83, 83, 87,85,89,84,86,82,84,85,84.5,80,83,84,82,81,70,80,86,84,80,85,85,80,80,81,70,85,80,83,82,81,85,86,84,86,87,85,84,85,86,87],
        hidden: true
      },
        {
        label: 'IND',
        backgroundColor: 'rgba(76, 175, 80,0.08)',
        borderColor: 'rgba(76, 175, 80,1)',
        data: [85,80,83,82,81,85,86,84,86,87,85,84,85,86,87,85,80,83,82,81,85,86,84,86,87,85,84,85,86,87,85,80,83,82,81,85,86,84,86,87,85,84,85,86,87,88,85,83]
      },
        {
        label: 'SF',
        backgroundColor: 'transparent',
        borderColor: 'rgb(244, 67, 54)',
        borderDash: [8, 5],
        borderWidth: 1,
        data: [84, 85, 82, 77, 70, 63, 83, 87,85,89,84,86,82,84,85,84.5,80,83,84,82,81,80,78,76,74,70,65,55,50,50,50,50,85,80,83,82,81,85,86,84,86,87,85,84,85,86,87]
      }
    ]
  };
  var options = {
    maintainAspectRatio: false,
    legend: {
      display: true,
        position: 'bottom'
    },

     pan: {
            // Boolean to enable panning
            enabled: true,

            // Panning directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow panning in the y direction
            mode: 'xy'
        },

        // Container for zoom options
        zoom: {
            // Boolean to enable zooming
            enabled: true,

            // Zooming directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow zooming in the y direction
            mode: 'x',
        },
    scales: {
      xAxes: [{
          display: true,
        gridLines: {
            drawOnChartArea: false,
//          color: 'transparent',
//          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 10,
          fontColor: 'rgba(255, 255, 255,1)',
        
        }

      }],
      yAxes: [{
        display: true,
        ticks: {
          display: true,
          min: 50,
          max: 100,
        }
      }],
    },
    elements: {
      line: {
        // tension: 0.00001,
        borderWidth: 2
      },
      point: {
        radius: 5,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 4,
      },
    }
  };
  var ctx = document.getElementById("card-chart2");
  var cardChart2 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });




//CLAIMS BY LOB
  var elements=27;
  var data4 = [];
  var data5 = [];
  var data6 = [];
  for (var j = 0; j <= elements; j++) {
    data4.push(random(6,26));
    data5.push(random(70,99));
    data6.push(59);
  }


  var options1 = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom'
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
          stepSize: Math.ceil(10),
          max: 100
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
  var data12 = {
    labels: ['Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16'],
    datasets: [
      {
        label: 'Large Group',
         backgroundColor: 'rgba(30,136,229,0.05)',
        borderColor: 'rgba(30,136,229,1)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: data4
      },
      {
        label: 'Small Group',
        backgroundColor: 'rgba(76, 175, 80,0.08)',
        borderColor: 'rgba(76, 175, 80,1)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: data5
      },
      {
        label: 'Individual',
        backgroundColor: 'transparent',
        borderColor: 'rgb(244, 67, 54)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5],
        data: data6
      }
    ]
  };

var ctx1 = document.getElementById("claim-main-chart");
var mainChart1 = new Chart(ctx1, {
    type: 'line',
    data: data12,
    options: options1
  });


var data_com = {
       labels: ['1-May', '2-May', '3-May', '4-May', '5-May', '6-May', '7-May', '8-May', '9-May', '10-May', '11-May', '12-May','15-May','16-May','17-May','18-May','19-May','22-May','23-May','24-May','25-May','26-May','30-May','31-May',
              '1-Jun', '2-Jun', '5-Jun', '6-Jun', '7-Jun', '8-Jun', '9-Jun', '12-Jun', '13-Jun', '14-Jun', '15-Jun', '16-Jun','19-Jun','20-Jun','21-Jun','22-Jun','23-Jun','26-Jun','27-Jun','28-Jun','29-Jun','30-Jun'],
    datasets: [
      {
        label: 'Med Supp',
        backgroundColor: 'rgba(30,136,229,0.05)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [84, 85, 82, 81, 80, 83, 83, 87,85,89,84,86,82,84,85,84.5,80,83,84,82,81,70,80,86,84,80,85,85,80,80,81,70,85,80,83,82,81,85,86,84,86,87,85,84,85,86,87]
      },   
    ]
  };
  var options_com = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
          display: true,
        gridLines: {
            drawOnChartArea: false,
//          color: 'transparent',
//          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 10,
          fontColor: '#fff',
        
        }

      }],
      yAxes: [{
        display: true,
        ticks: {
          display: true,
          min: 50,
          max: 100,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 2
      },
      point: {
        radius: 5,
        hitRadius: 10,
        hoverRadius: 10,
        hoverBorderWidth: 3,
      },
    }
  };
  var ctx_com = document.getElementById("combined");
  var cardChart2_com = new Chart(ctx_com, {
    type: 'line',
    data: data_com,
    options: options_com
  });
    
    
    //combined end  
  }

  chartDownload(id,name,format){
    
    var ctx1 = <HTMLCanvasElement> document.getElementById(id);
    ctx1.toBlob(function(blob) {
        FileSaver.saveAs(blob, name+"_"+Date.now()+format);
    });
  }

}