import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FraudComplaintsComponent } from './fraud-complaints/fraud-complaints.component';
import { FraudstersReportedComponent } from './fraudsters-reported/fraudsters-reported.component';
import { ContactsComponent } from './contacts/contacts.component';
import {SignupComponent} from './signup/signup.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import {LoginComponent} from './login/login.component';


path: "..."

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
 
  { path: 'fraud-complaints', component: FraudComplaintsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'fraudsters-reported', component: FraudstersReportedComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  
  { path: '**', component: NoPageFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
