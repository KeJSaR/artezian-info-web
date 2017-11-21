import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './services/data.service';

import { ShowInfoDirective } from './directives/show-info.directive';

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
import { BreadcrumbsComponent } from './sections/breadcrumbs/breadcrumbs.component';
import { CallComponent } from './sections/call/call.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { ImgShowComponent } from './sections/img-show/img-show.component';
import { MenuComponent } from './sections/menu/menu.component';
import { SidebarComponent } from './sections/sidebar/sidebar.component';
import { TextComponent } from './sections/text/text.component';
import { TopComponent } from './sections/top/top.component';
import { BordersComponent } from './sections/borders/borders.component';

@NgModule({
  declarations: [
    ShowInfoDirective,
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
    BreadcrumbsComponent,
    CallComponent,
    FooterComponent,
    HeaderComponent,
    ImgShowComponent,
    MenuComponent,
    SidebarComponent,
    TextComponent,
    TopComponent,
    BordersComponent
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
