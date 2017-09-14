import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ApplicationComponent } from './pages/application/application.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { InfoComponent } from './pages/info/info.component';
import { IntroComponent } from './pages/intro/intro.component';
import { RulesComponent } from './pages/rules/rules.component';

import { ArticleContentComponent } from './parts/article-content/article-content.component';
import { ArticlesListComponent } from './parts/articles-list/articles-list.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';

import { GetDataService } from './services/get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    ArticleComponent,
    ArticlesComponent,
    ContactsComponent,
    GalleryComponent,
    InfoComponent,
    IntroComponent,
    RulesComponent,
    ArticleContentComponent,
    ArticlesListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
