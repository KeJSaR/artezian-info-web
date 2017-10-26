import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';

import { DataService }           from './data.service';
import { NotFoundComponent }     from './pages/not-found/not-found.component';
import { PageAboutComponent }    from './pages/page-about/page-about.component';
import { PageArticlesComponent } from './pages/page-articles/page-articles.component';
import { PageGalleryComponent }  from './pages/page-gallery/page-gallery.component';
import { PageRulesComponent }    from './pages/page-rules/page-rules.component';
import { PageFormComponent }     from './pages/page-form/page-form.component';

import { HeaderComponent }       from './parts/header/header.component';
import { FooterComponent }       from './parts/footer/footer.component';
import { MenuComponent }         from './parts/menu/menu.component';
import { TextComponent }         from './parts/text/text.component';
import { IntroComponent }        from './parts/intro/intro.component';
import { ArticleComponent }      from './parts/article/article.component';
import { BlogComponent }         from './parts/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PageAboutComponent,
    PageArticlesComponent,
    PageGalleryComponent,
    PageRulesComponent,
    PageFormComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    TextComponent,
    IntroComponent,
    ArticleComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
