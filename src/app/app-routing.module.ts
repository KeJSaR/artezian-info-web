import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',                 component: PageComponent, data: {section: 'main'} },
  { path: 'about',                component: PageComponent, data: {section: 'about'} },
  { path: 'about/:subsection',    component: PageComponent, data: {section: 'about'} },
  { path: 'articles',             component: PageComponent, data: {section: 'articles'} },
  { path: 'articles/:subsection', component: PageComponent, data: {section: 'articles'} },
  { path: 'gallery',              component: PageComponent, data: {section: 'gallery'} },
  { path: 'gallery/:subsection',  component: PageComponent, data: {section: 'gallery'} },
  { path: 'rules',                component: PageComponent, data: {section: 'rules'} },
  { path: 'rules/:subsection',    component: PageComponent, data: {section: 'rules'} },
  { path: 'form',                 component: PageComponent, data: {section: 'form'} },
  { path: '**',                   component: PageComponent, data: {section: '404'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
