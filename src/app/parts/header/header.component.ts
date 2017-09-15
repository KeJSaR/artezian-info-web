import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  menuSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(): void {
    this.menuSelected = !this.menuSelected;
  }

}
