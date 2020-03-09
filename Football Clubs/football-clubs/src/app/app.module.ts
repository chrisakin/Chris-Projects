import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule } from '@angular/material/grid-list';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MapsComponent } from './maps/maps.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ListSpaComponent } from './list-spa/list-spa.component';
import { ListItaComponent } from './list-ita/list-ita.component';
import { ListAfComponent } from './list-af/list-af.component';
import { ListEuComponent } from './list-eu/list-eu.component';
import { ListAmComponent } from './list-am/list-am.component';
import { ListAsComponent } from './list-as/list-as.component';
import { ListAuComponent } from './list-au/list-au.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HomeComponent } from './home/home.component';
import { Details2Component } from './details2/details2.component';
import { Details3Component } from './details3/details3.component';
import { FooterComponent } from './footer/footer.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    MapsComponent,
    HomePageComponent,
    HeaderComponent,
    ListSpaComponent,
    ListItaComponent,
    ListAfComponent,
    ListEuComponent,
    ListAmComponent,
    ListAsComponent,
    ListAuComponent,
    PicturesComponent,
    HomeComponent,
    Details2Component,
    Details3Component,
    FooterComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
