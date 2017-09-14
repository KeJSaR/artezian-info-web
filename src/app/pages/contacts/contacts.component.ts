import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <app-header></app-header>
    <p>
      contacts Works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
