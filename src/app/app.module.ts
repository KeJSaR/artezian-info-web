import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import { HeaderComponent } from './sections/header/header.component';
import { BreadcrumbsComponent } from './sections/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './sections/footer/footer.component';
import { CallComponent } from './sections/call/call.component';
import { MenuComponent } from './sections/menu/menu.component';
import { TopComponent } from './sections/top/top.component';

import { AboutComponent } from './content/about/about.component';
import { TextComponent } from './content/about/text/text.component';
import { BlogItemComponent } from './content/about/blog-item/blog-item.component';

import { ArticleComponent } from './content/article/article.component';
import { BlogComponent } from './content/blog/blog.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { AlbumComponent } from './content/album/album.component';
import { FormComponent } from './content/form/form.component';
import { MainComponent } from './content/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    TextComponent,
    BlogItemComponent,
    ArticleComponent,
    BlogComponent,
    AboutComponent,
    NotFoundComponent,
    GalleryComponent,
    AlbumComponent,
    FormComponent,
    MainComponent,
    CallComponent,
    MenuComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
