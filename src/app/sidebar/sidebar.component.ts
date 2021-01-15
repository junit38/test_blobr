import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private popupOpen = false;
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

  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }
}
