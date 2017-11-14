import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './services/data.service';

import { ShowInfoDirective } from './directives/show-info.directive';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { BlogItemComponent } from './content/about/blog-item/blog-item.component';
import { TextComponent } from './content/about/text/text.component';
import { AboutComponent } from './content/about/about.component';
import { AlbumComponent } from './content/album/album.component';
import { ArticleComponent } from './content/article/article.component';
import { BlogComponent } from './content/blog/blog.component';
import { FormComponent } from './content/form/form.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { MainComponent } from './content/main/main.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { BreadcrumbsComponent } from './sections/breadcrumbs/breadcrumbs.component';
import { CallComponent } from './sections/call/call.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { MenuComponent } from './sections/menu/menu.component';
import { SidebarComponent } from './sections/sidebar/sidebar.component';
import { TopComponent } from './sections/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    BlogItemComponent,
    TextComponent,
    AboutComponent,
    AlbumComponent,
    ArticleComponent,
    BlogComponent,
    FormComponent,
    GalleryComponent,
    MainComponent,
    NotFoundComponent,
    BreadcrumbsComponent,
    CallComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    TopComponent,
    ShowInfoDirective
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
