import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LyftsComponent } from './lyfts/lyfts.component';
import { HistoryComponent } from './history/history.component';
import {CreateModule} from './create/create.module';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'lyfts', component: LyftsComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'create',
      loadChildren: './create/create.module#CreateModule' },
    // {path: 'user/:id', component: ViewMovieComponent},
    { path: '', redirectTo: '', pathMatch: 'full' }
];