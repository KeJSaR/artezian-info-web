import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable }  from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { MenuItem } from './interfaces/menu-item.interface';

@Injectable()
export class DataService {
  
  url = 'http://localhost/artezian-info-web/src/assets/data.php';
  // req: string = `username=${this.usn}&password=${this.psd}`;

  constructor(private http: HttpClient) { }
  
  getMenu(): Observable<MenuItem[]> {
    return this.http.post(this.url, 'get=menu', {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: MenuItem[]) => resp);
  }

}
