import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FraudComplaintsComponent } from './fraud-complaints/fraud-complaints.component';
import { FraudstersReportedComponent } from './fraudsters-reported/fraudsters-reported.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FraudComplaintsComponent,
    FraudstersReportedComponent,
    ContactsComponent,
    NoPageFoundComponent,
    SignupComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
