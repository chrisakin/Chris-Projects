import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FrontPageComponent } from './front-page/front-page.component';
import { AboutComponent } from './about/about.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PicturesComponent } from './pictures/pictures.component';

path: "..."

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FrontPageComponent },
  { path: 'about', component: AboutComponent },
 
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
