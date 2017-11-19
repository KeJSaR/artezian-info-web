import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MenuItem } from '../interfaces/menu-item.interface';
import { Text } from '../interfaces/text.interface';
import { Article } from '../interfaces/article.interface';
import { AuthorInfo } from '../interfaces/author-info.interface';
import { BlogItem } from '../interfaces/blog-item.interface';
import { Gallery } from '../interfaces/gallery.interface';
import { Image } from '../interfaces/image.interface';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private url = 'http://artezian.zone/assets/php/data.php';
  // private url = 'assets/data.php';

  constructor(private http: HttpClient) { }

  /**
   * Get Menu data
   */

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.post(this.url, `get=menu-items`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: MenuItem[]) => resp);
  }

  getSectionName(alias: string): Observable<string> {
    return this.http.post(this.url, `get=section-name&alias=${alias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: string) => resp);
  }

  getSubsectionName(alias: string, subalias: string): Observable<string> {
    return this.http.post(this.url, `get=subsection-name&alias=${alias}&subalias=${subalias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: string) => resp);
  }

  getPageInfo(alias: string): Observable<string> {
    return this.http.post(this.url, `get=section-info&alias=${alias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: string) => resp);
  }

  /**
   * Get Text data
   */

  getTexts(alias: string): Observable<Text[]> {
    return this.http.post(this.url, `get=texts&alias=${alias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Text[]) => resp);
  }

  /**
   * Get Article data
   */
  
  getBlogItems(alias: string): Observable<BlogItem[]> {
    return this.http.post(this.url, `get=blog-items&alias=${alias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: BlogItem[]) => resp);
  }

  getArticle(alias: string, subalias: string): Observable<Article> {
    return this.http.post(this.url, `get=article&alias=${alias}&subalias=${subalias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Article) => resp);
  }

  getAuthorInfo(alias: string, subalias: string): Observable<AuthorInfo> {
    return this.http.post(this.url, `get=author-info&alias=${alias}&subalias=${subalias}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: AuthorInfo) => resp);
  }

  /**
   * Get Gallery data
   */

  getGalleries(): Observable<Gallery[]> {
    return this.http.post(this.url, `get=galleries`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Gallery[]) => resp);
  }

  getGalleryImages(galleryId: string): Observable<Image[]> {
    return this.http.post(this.url, `get=gallery-images&gallery-id=${galleryId}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Image[]) => resp);
  }

  getGalleryInfo(galleryId: string): Observable<Gallery> {
    return this.http.post(this.url, `get=gallery-info&gallery-id=${galleryId}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: Gallery) => resp);
  }

  /**
   * Check Image
   */

  isImageExist(image: string): Observable<string> {
    return this.http.post(this.url, `get=is-image-exist&image=${image}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).map((resp: string) => resp);
  }

}
