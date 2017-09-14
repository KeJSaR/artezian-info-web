import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './pages/intro/intro.component';
import { InfoComponent } from './pages/info/info.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RulesComponent } from './pages/rules/rules.component';
import { ApplicationComponent } from './pages/application/application.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info/:id', component: ArticleComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'rules/:id', component: ArticleComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
