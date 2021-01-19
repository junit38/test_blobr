import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private popupOpen = false;
  private popupWidth = null;
  private wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.popupOpen = false;
    }
    this.wasInside = false;
  }

  constructor() { }

  ngOnInit() {
    this.popupWidth = document.getElementById('sidebar').offsetWidth - 30 + 'px';
  }

  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }
}
