import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { NotFoundComponent }     from './pages/not-found/not-found.component';
import { PageAboutComponent }    from './pages/page-about/page-about.component';
import { PageArticlesComponent } from './pages/page-articles/page-articles.component';
import { PageGalleryComponent }  from './pages/page-gallery/page-gallery.component';
import { PageRulesComponent }    from './pages/page-rules/page-rules.component';
import { PageFormComponent }     from './pages/page-form/page-form.component';

const routes: Routes = [
  { path: '',             redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',        component: PageAboutComponent },
  { path: 'articles',     component: PageArticlesComponent },
  { path: 'articles/:id', component: PageArticlesComponent },
  { path: 'gallery',      component: PageGalleryComponent },
  { path: 'gallery/:id',  component: PageGalleryComponent },
  { path: 'rules',        component: PageRulesComponent },
  { path: 'rules/:id',    component: PageRulesComponent },
  { path: 'form',         component: PageFormComponent },
  { path: '**',           component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
