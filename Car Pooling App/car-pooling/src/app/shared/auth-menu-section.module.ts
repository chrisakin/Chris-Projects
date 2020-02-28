import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthMenuSectionComponent } from '../auth-menu-section/auth-menu-section.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AuthMenuSectionComponent
  ],
  exports: [
    AuthMenuSectionComponent
  ]
})

export class AuthMenuSectionModule { }
