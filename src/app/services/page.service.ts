import { Injectable } from '@angular/core';

import { Page }       from '../interfaces/page.interface';

@Injectable()
export class PageService {

  private dict: Page = {
    page: 'main'
  }

  constructor() { }

  setPage(page): void {
    this.dict.page = page;
  }

  getPage(): string {
    return this.dict.page;
  }

}
