import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  private currentPeriod = {
    month: 'September',
    year: '2020'
  }

  private previousPeriod = {
    month: 'September',
    year: '2019'
  }

  constructor() { }

}
