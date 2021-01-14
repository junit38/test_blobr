import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  headers = [
    'Days',
    'Weeks',
    'Months',
    'Quarters',
    'Custom...'
  ];

  selectedHeader = 'Months';

  year = '2020';

  months = [{
      month: 'November',
      year: 2019
    },
    {
      month: 'December',
      year: 2019
    },
    {
      month: 'January',
      year: 2019
    },
    {
      month: 'February',
      year: 2020
    },
    {
      month: 'March',
      year: 2020
    },
    {
      month: 'April',
      year: 2020
    },
    {
      month: 'May',
      year: 2020
    },
    {
      month: 'June',
      year: 2020
    },
    {
      month: 'July',
      year: 2020
    },
    {
      month: 'August',
      year: 2020
    },
    {
      month: 'September',
      year: 2020
    }
  ];

  monthsLength = this.months.length;

  selectedMonth = {
    month: 'September',
    year: 2020
  }

  constructor() { }

}
