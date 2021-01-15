import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  private headers = [
    'Days',
    'Weeks',
    'Months',
    'Quarters',
    'Years',
    'Custom...'
  ];

  private selectedHeader = 'Months';

  private months = [{
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

  private monthsLength = this.months.length;

  private selectedMonthIndex = this.monthsLength - 1;

  firstMonth() {
    this.selectedMonthIndex = 0;
  }

  lastMonth() {
    this.selectedMonthIndex = this.monthsLength - 1;
  }

  previousMonth() {
    if (this.selectedMonthIndex < this.monthsLength - 1)
      this.selectedMonthIndex++;
  }

  nextMonth() {
    if (this.selectedMonthIndex > 0)
      this.selectedMonthIndex--;
  }

  // @HostListener("window:scroll", []) onWindowScroll() {
  //   console.log('scrolling');
  //   const verticalOffset = window.pageYOffset
  //       || document.documentElement.scrollTop
  //       || document.body.scrollTop || 0;
  // }

  private eventCatch = 0;

  onWheel(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.eventCatch == 0) {
      if (event.deltaY < 0) {
        this.nextMonth();
      }
      else if (event.deltaY > 0) {
        this.previousMonth();
      }
    }
    this.eventCatch++;
    if (this.eventCatch == 7)
      this.eventCatch = 0;
    return false;
  }

  constructor() { }

}
