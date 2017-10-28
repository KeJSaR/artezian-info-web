import { NgModule }       from '@angular/core';
import { Routes }         from '@angular/router';
import { RouterModule }   from '@angular/router';

import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '',                redirectTo: '/about', pathMatch: 'full'             },
  { path: 'about',           component: PagesComponent, data: {page: 'about'}    },
  { path: 'about/:alias',    component: PagesComponent, data: {page: 'about'}    },
  { path: 'articles',        component: PagesComponent, data: {page: 'articles'} },
  { path: 'articles/:alias', component: PagesComponent, data: {page: 'articles'} },
  { path: 'gallery',         component: PagesComponent, data: {page: 'gallery'}  },
  { path: 'gallery/:alias',  component: PagesComponent, data: {page: 'gallery'}  },
  { path: 'rules',           component: PagesComponent, data: {page: 'rules'}    },
  { path: 'rules/:alias',    component: PagesComponent, data: {page: 'rules'}    },
  { path: 'form',            component: PagesComponent, data: {page: 'form'}     },
  { path: '**',              component: PagesComponent, data: {page: '404'}      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
