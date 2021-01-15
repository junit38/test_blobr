import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  private statistics = [
    {
      name: 'Revenue',
      value: 5.00,
      transactions: 4,
      lastYearValue: 0.00,
      lastYearTransactions: 0
    },
    {
      name: 'Refunds',
      value: 0.00,
      transactions: 0,
      lastYearValue: 0,
      lastYearTransactions: 0
    },
    {
      name: 'Chargebacks',
      value: 0.00,
      transactions: 0,
      lastYearValue: 0.00,
      lastYearTransactions: 0
    }
  ]

  constructor() { }

}
