import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component} from './details2/details2.component';
import { Details3Component} from './details3/details3.component';
import { MapsComponent } from './maps/maps.component';
import {ListSpaComponent} from './list-spa/list-spa.component';
import {ListItaComponent} from './list-ita/list-ita.component';
import {ListAfComponent} from './list-af/list-af.component';
import {ListAmComponent} from './list-am/list-am.component';
import {ListAsComponent} from './list-as/list-as.component';
import {ListEuComponent} from './list-eu/list-eu.component';
import {ListAuComponent} from './list-au/list-au.component';
import {PicturesComponent} from './pictures/pictures.component';
import {HomeComponent} from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'List of Teams' }
  },

  {
    path: 'list-spa',
    component: ListSpaComponent,
    data: {title: 'List of Teams2'}
  },

  {
    path: 'list-ita',
    component: ListItaComponent,
    data: {title: 'List of Teams3'}
  },

  {
    path: 'list-af',
    component: ListAfComponent,
    data: {title: 'List of Teams4'}
  },

  {
    path: 'list-am',
    component: ListAmComponent,
    data: {title: 'List of Teams5'}
  },

  {
    path: 'list-as',
    component: ListAsComponent,
    data: {title: 'List of Teams6'}
  },

  {
    path: 'list-au',
    component: ListAuComponent,
    data: {title: 'List of Team7'}
  },

  {
    path: 'list-eu',
    component: ListEuComponent,
    data: {title: 'List of Teams8'}
  },

  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'List of Teams9'}
  },

  {
    path: 'pictures',
    component: PicturesComponent,
    data: {title: 'List of Teams10'}
  },

  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'Team Details' }
  },

  {
    path: 'details2/:id',
    component: Details2Component,
    data: { title: 'Team Details' }
  },

  {
    path: 'details3/:id',
    component: Details3Component,
    data: { title: 'Team Details' }
  },
  {
    path: 'maps/:lat/:lng',
    component: MapsComponent,
    data: { title: 'Team Position' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
