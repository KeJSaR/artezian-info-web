import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }        from './app-routing.module';
import { MaterialModule }          from './material/material.module';

import { DataService }             from './services/data.service';
import { PageService }             from './services/page.service';

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
import { MainComponent }           from './parts/main/main.component';

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
    FormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    DataService,
    PageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
