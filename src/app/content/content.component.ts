import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private marginLeft;

  constructor() {}

  ngOnInit() {
    this.marginLeft = document.getElementById('sidebar').offsetWidth + 'px';
  }


}
