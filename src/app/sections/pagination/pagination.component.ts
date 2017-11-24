import { Component, Input } from '@angular/core';

@Component({
  selector: 'aae-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent {

  @Input() currentPage: number;
  @Input() lastPage: number;

}
