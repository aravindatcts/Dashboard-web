import {Component, OnInit, OnChanges} from '@angular/core';
import {Chart} from 'chart.js';


@Component({
    selector: 'chart-trend',
  templateUrl: './linecharttrendinv.component.html',
  styleUrls: ['./linecharttrendinv.component.scss']
})

export class ChartTrendInv{

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
      },
      {
        label: 'OTH',
        backgroundColor: 'rgba(176, 175, 80,0.08)',
        borderColor: 'rgba(176, 175, 80,1)',
        data: [75,70,73,72,71,75,76,74,76,77,75,74,75,76,77,75,70,73,72,71,75,76,74,76,77,75,74,75,76,77,75,70,73,72,71,75,76,74,76,77,75,74,75,76,77,77,75,73]
      },
      {
        label: 'LG/SG',
        backgroundColor: 'rgba(130,136,229,0.05)',
        borderColor: 'rgba(0,255,255,.55)',
        data: [64, 65, 62, 61, 60, 63, 63, 67,65,69,64,66,62,64,65,64.5,60,63,64,62,61,70,60,66,64,60,65,65,60,60,61,70,65,60,63,62,61,65,66,64,66,67,65,64,65,66,67],
        
      }
    ]
  };
  var options = {
    maintainAspectRatio: false,
    legend: {
      display: true,
        position: 'bottom'
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

//TOTAL INV TRENDING

var data1 = {
       labels: ['1-May', '2-May', '3-May', '4-May', '5-May', '6-May', '7-May', '8-May', '9-May', '10-May', '11-May', '12-May','15-May','16-May','17-May','18-May','19-May','22-May','23-May','24-May','25-May','26-May','30-May','31-May',
              '1-Jun', '2-Jun', '5-Jun', '6-Jun', '7-Jun', '8-Jun', '9-Jun', '12-Jun', '13-Jun', '14-Jun', '15-Jun', '16-Jun','19-Jun','20-Jun','21-Jun','22-Jun','23-Jun','26-Jun','27-Jun','28-Jun','29-Jun','30-Jun'],
    datasets: [
      {
        label: 'Med Supp',
        backgroundColor: 'rgba(30,136,229,0.05)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [84, 85, 82, 81, 80, 83, 83, 87,85,89,84,86,82,84,85,84.5,80,83,84,82,81,70,80,86,84,80,85,85,80,80,81,70,85,80,83,82,81,85,86,84,86,87,85,84,85,86,87],
       
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
        data: [44, 45, 42, 77, 70, 63, 43, 47,45,49,44,46,42,44,45,44.5,40,43,44,42,41,40,74,76,74,70,65,55,50,50,50,50,45,40,43,42,41,45,46,44,46,47,45,44,45,46,47]
      },
      {
        label: 'OTH',
        backgroundColor: 'rgba(176, 175, 80,0.08)',
        borderColor: 'rgba(176, 175, 80,1)',
        data: [55,50,53,52,51,55,56,54,56,55,55,54,55,56,55,55,50,53,52,51,55,56,54,56,55,55,54,55,56,55,55,50,53,52,51,55,56,54,56,55,55,54,55,56,55,55,55,53]
      },
      {
        label: 'LG/SG',
        backgroundColor: 'rgba(130,136,229,0.05)',
        borderColor: 'rgba(0,255,255,.55)',
        data: [64, 65, 62, 61, 60, 63, 63, 67,65,69,64,66,62,64,65,64.5,60,63,64,62,61,70,60,66,64,60,65,65,60,60,61,70,65,60,63,62,61,65,66,64,66,67,65,64,65,66,67],
        
      }
    ]
  };
  var options1 = {
    maintainAspectRatio: false,
    legend: {
      display: true,
        position: 'bottom'
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
  var ctx = document.getElementById("card-chart3");
  var cardChart2 = new Chart(ctx, {
    type: 'line',
    data: data1,
    options: options1
  });




    
  }

}