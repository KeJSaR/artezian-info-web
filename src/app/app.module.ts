import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './content/about/about.component';
import { AlbumComponent } from './content/album/album.component';
import { ArticleComponent } from './content/article/article.component';
import { BlogComponent } from './content/blog/blog.component';
import { FormComponent } from './content/form/form.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { MainComponent } from './content/main/main.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { BlogItemComponent } from './sections/blog-item/blog-item.component';
import { TopNavComponent } from './sections/top-nav/top-nav.component';
import { BreadcrumbsComponent } from './sections/breadcrumbs/breadcrumbs.component';
import { CallComponent } from './sections/call/call.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { ImgShowComponent } from './sections/img-show/img-show.component';
import { MenuComponent } from './sections/menu/menu.component';
import { TextComponent } from './sections/text/text.component';
import { TopComponent } from './sections/top/top.component';
import { PaginationComponent } from './sections/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AboutComponent,
    AlbumComponent,
    ArticleComponent,
    BlogComponent,
    FormComponent,
    GalleryComponent,
    MainComponent,
    NotFoundComponent,
    BlogItemComponent,
    TopNavComponent,
    BreadcrumbsComponent,
    CallComponent,
    FooterComponent,
    HeaderComponent,
    ImgShowComponent,
    MenuComponent,
    TextComponent,
    TopComponent,
    PaginationComponent,
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
