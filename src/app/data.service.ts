import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface ItemsResponse {
  name: string;
  string: string;
}

@Injectable()
export class DataService {

  url = 'http://localhost/artezian-info-web/src/assets/data.php';
  usn: string = 'myusernamemyusername';
  psd: string = 'mypasswordmypassword';
  body: string = `username=${this.usn}&password=${this.psd}`;

  constructor(private http: HttpClient) {}

  getData() {

    const req = this.http.post<ItemsResponse>
      (this.url, this.body, {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      })
        .subscribe(
          res => {
            console.log(res.name + ' ' + res.string);
          },
          err => {
            console.log(err);
          }
        );

  }

}
