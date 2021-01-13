import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics-per-day',
  templateUrl: './statistics-per-day.component.html',
  styleUrls: ['./statistics-per-day.component.css']
})
export class StatisticsPerDayComponent {

  headers = [
    'Revenue',
    'Refunds',
    'Chargebacks'
  ]

  statistics = [
    {
      date: new Date(),
      statistics: [
        {
          header: 'Revenue',
          value: 2,
          transactions: 1
        },
        {
          header: 'Refunds',
          value: 0,
          transactions: 0
        },
        {
          header: 'Chargebacks',
          value: 0,
          transactions: 0
        }
      ]
    }
  ]

  constructor() { }

}
