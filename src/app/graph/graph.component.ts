import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs-3.2.6/canvasjs.min.js'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private currentPeriod = {
    month: 'September',
    year: '2020'
  }

  private previousPeriod = {
    month: 'September',
    year: '2019'
  }

  constructor() { }

  ngOnInit() {
    const dataPointsFirstPeriod = [
      {
        x: new Date('September 1 2020'),
        y: 2,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 2 2020'),
        y: 1,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 3 2020'),
        y: 3,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      }
    ];

    const dataPointsPreviousPeriod = [
      {
        x: new Date('August 31 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: '',
        markerColor: 'transparent',
        markerBorderColor: 'transparent',
        lineColor: '#1375EE',
        lineDashType: 'solid'
      },
      {
        x: new Date('September 1 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: '',
        markerColor: 'transparent',
        markerBorderColor: 'transparent',
        lineColor: '#1375EE',
        lineDashType: 'solid'
      },
      {
        x: new Date('September 2 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: '',
        markerColor: 'transparent',
        markerBorderColor: 'transparent',
        lineColor: '#1375EE',
        lineDashType: 'solid'
      },
      {
        x: new Date('September 3 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: '',
        markerColor: 'transparent',
        markerBorderColor: 'transparent'
      },
      {
        x: new Date('September 4 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 5 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 6 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 7 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 8 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 9 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 10 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 11 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 12 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 13 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 14 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 15 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 16 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 17 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 18 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 19 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 20 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 21 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 22 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 23 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 24 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 25 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 26 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 27 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 28 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 29 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      },
      {
        x: new Date('September 30 2020'),
        y: 0,
        labelY: '',
        labelX: '',
        labelXPreviousPeriod: ''
      }
    ];

    function updateDataPoint(dataPoint) {
      const date = dataPoint.x;
      let weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
      let day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
      let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
      let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
      dataPoint.labelX = weekday + ', ' + day + ' ' + month + ' ' + year;
      let previousPeriodDate = new Date(date);
      previousPeriodDate.setFullYear(previousPeriodDate.getFullYear() - 1);
      weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(previousPeriodDate);
      day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(previousPeriodDate);
      month = new Intl.DateTimeFormat('en', { month: 'long' }).format(previousPeriodDate);
      year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(previousPeriodDate);
      dataPoint.labelXPreviousPeriod = weekday + ', ' + day + ' ' + month + ' ' + year;
      dataPoint.labelY = dataPoint.y + ".00";
    }

    dataPointsFirstPeriod.forEach(updateDataPoint);
    dataPointsPreviousPeriod.forEach(updateDataPoint);

    let chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: false,
      animationEnabled: false,
      exportEnabled: false,
      dataPointWidth: 20,
      axisX: {
        minimum: new Date('August 31 2020 12:00'),
        tickThickness: 0,
        lineThickness: 0,
        labelWrap: true,
        labelMaxWidth: 50,
        labelTextAlign: 'center',
        valueFormatString: "DDD DD MMM"
      },
      axisY: {
        minimum: -0.1,
        maximum: 4,
        interval: 1,
        tickThickness: 0,
        lineThickness: 0,
        gridColor: '#f5f5f5',
        labelFormatter: function (e) {
          return '€' + e.value;
        }
      },
      toolTip:{
        content: "<div class='graph-tooltip'>\
          <div class='graph-tooltip-header'>\
            <h3>{labelX}</h3>\
            <small>{labelXPreviousPeriod}</small>\
          </div>\
          <div class='graph-tooltip-content'>\
            <div class='graph-tooltip-content-header'>\
              <b>Total:</b>\
              <div>€{labelY}</div>\
            </div>\
            <div class='graph-tooltip-content-footer'>\
              €0.00\
            </div>\
          </div>\
        </div>",
        borderColor: 'transparent'
      },
      data: [
      {
        color: '#1375EE',
        type: 'line',
        lineThickness: 1,
        markerColor: 'white',
        markerBorderColor: '#1375EE',
        markerBorderThickness: 2,
        mouseover: function(e){
          e.dataPoint.markerColor = '#1375EE';
        },
        dataPoints: dataPointsFirstPeriod
      },
      {
        color: '#74C6FC',
        type: 'line',
        lineThickness: 1,
        lineDashType: "dash",
        markerColor: 'white',
        markerBorderColor: '#74C6FC',
        markerBorderThickness: 2,
        mouseover: function(e){
          e.dataPoint.markerColor = '#74C6FC';
        },
        dataPoints: dataPointsPreviousPeriod
      }]
    });

    chart.render();

    let div = document.getElementsByClassName('canvasjs-chart-tooltip')[0].firstChild as HTMLElement;
    div.style.padding = '0';
    div.style.textShadow = 'none';
    div.style.fontSize = 'initial !important';
    div.style.borderRadius = '10px';
  }
}
