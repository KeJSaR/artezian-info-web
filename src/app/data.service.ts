import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable }  from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { MenuItem } from './interfaces/menu-item';

@Injectable()
export class DataService {
  
  url = 'http://localhost/artezian-info-web/src/assets/data.php';
  // req: string = `username=${this.usn}&password=${this.psd}`;
  req: string = 'get=menu';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<MenuItem[]> {
    return this.http.post(this.url, this.req, {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      }).map((resp: MenuItem[]) => {
        let menu: MenuItem[] = resp;
        return menu;
      });
  }

}
