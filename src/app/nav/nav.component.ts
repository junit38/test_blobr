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

  months = [
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September'
  ];

  constructor() { }

}
