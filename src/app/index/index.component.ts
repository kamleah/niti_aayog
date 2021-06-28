import { Component, OnInit } from '@angular/core';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  linechart:any;
  chartLegends:any;
  constructor() { }

  ngOnInit() {
    
    this.linechart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'Karnataka',
              data: [12, 19, 3, 5, 2, 3],
              borderColor: 'rgb(75, 192, 192)', 
              backgroundColor:'rgb(75, 192, 192)',           
              borderWidth: 1
          },
          {
            label: 'Maharashtra',
            data: [50, 25, 13, 25, 32, 35],
            borderColor: 'rgb(75, 192, 192)',    
            backgroundColor:'rgb(75, 192, 192)',         
            borderWidth: 1
        },
        {
            label: 'Bihar',
            data: [15, 35, 87, 20, 77, 79],
            borderColor: 'rgb(75, 192, 192)',    
            backgroundColor:'rgb(75, 192, 192)',         
            borderWidth: 1
        }]
      },
      options: {
        plugins: {
            legend:{
              display:false,
              position:"right",
              align:"middle",                  
              labels: {
                fontSize: 10,
                usePointStyle: true,                    
              }
            },      
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  this.chartLegends = this.linechart.legend.legendItems;
  console.log("Hiis")
  }

}
