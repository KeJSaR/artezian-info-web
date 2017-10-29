import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }        from './app-routing.module';
import { AppMaterialModule }       from './app-material.module';

import { DataService }             from './data.service';

import { AppComponent }            from './app.component';
import { PagesComponent }          from './pages/pages.component';

import { HeaderComponent }         from './parts/header/header.component';
import { FooterComponent }         from './parts/footer/footer.component';
import { TextComponent }           from './parts/text/text.component';
import { IntroComponent }          from './parts/intro/intro.component';
import { ArticleComponent }        from './parts/article/article.component';
import { BlogComponent }           from './parts/blog/blog.component';
import { ContentComponent }        from './parts/content/content.component';
import { NotFoundComponent }       from './parts/not-found/not-found.component';
import { GalleryComponent }        from './parts/gallery/gallery.component';
import { AlbumComponent }          from './parts/album/album.component';
import { FormComponent }           from './parts/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    TextComponent,
    IntroComponent,
    ArticleComponent,
    BlogComponent,
    ContentComponent,
    NotFoundComponent,
    GalleryComponent,
    AlbumComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
