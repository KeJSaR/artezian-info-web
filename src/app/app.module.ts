import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageArticlesComponent } from './pages/page-articles/page-articles.component';
import { PageGalleryComponent } from './pages/page-gallery/page-gallery.component';
import { PageRulesComponent } from './pages/page-rules/page-rules.component';
import { PageFormComponent } from './pages/page-form/page-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PageAboutComponent,
    PageArticlesComponent,
    PageGalleryComponent,
    PageRulesComponent,
    PageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
