import { NgModule }       from '@angular/core';
import { Routes }         from '@angular/router';
import { RouterModule }   from '@angular/router';

import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '',                redirectTo: '/main', pathMatch: 'full'             },
  { path: 'main',            component: PageComponent, data: {page: 'main'}     },
  { path: 'about',           component: PageComponent, data: {page: 'about'}    },
  { path: 'about/:alias',    component: PageComponent, data: {page: 'about'}    },
  { path: 'articles',        component: PageComponent, data: {page: 'articles'} },
  { path: 'articles/:alias', component: PageComponent, data: {page: 'articles'} },
  { path: 'gallery',         component: PageComponent, data: {page: 'gallery'}  },
  { path: 'gallery/:alias',  component: PageComponent, data: {page: 'gallery'}  },
  { path: 'rules',           component: PageComponent, data: {page: 'rules'}    },
  { path: 'rules/:alias',    component: PageComponent, data: {page: 'rules'}    },
  { path: 'form',            component: PageComponent, data: {page: 'form'}     },
  { path: '**',              component: PageComponent, data: {page: '404'}      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
