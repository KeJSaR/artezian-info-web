import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable }  from 'rxjs/Observable';

import { Menu }        from '../interfaces/menu.interface';
import { Text }        from '../interfaces/text.interface';
import { Intro }       from '../interfaces/intro.interface';
import { Article }     from '../interfaces/article.interface';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private url = 'http://localhost/artezian-info-web/src/assets/data.php';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.post(this.url, 'get=menu', {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Menu[]) => resp);
  }

  getText(page: string): Observable<Text[]> {
    return this.http.post(this.url, `get=text&page=${page}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Text[]) => resp);
  }

  getIntro(page: string): Observable<Intro[]> {
    return this.http.post(this.url, `get=intro&page=${page}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Intro[]) => resp);
  }

  getArticle(page: string, alias: string): Observable<Article[]> {
    return this.http.post(this.url, `get=article&page=${page}&alias=${alias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Article[]) => resp);
  }

}
