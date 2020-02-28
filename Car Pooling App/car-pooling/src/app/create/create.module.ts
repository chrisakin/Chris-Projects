import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateRoutingModule } from './create-routing.module';
import { StartComponent } from './start/start.component';
import { IndexComponent } from './index/index.component';
import { AuthMenuSectionModule } from '../shared/auth-menu-section.module';
import { GetComponent } from './get/get.component';

@NgModule({
  imports: [
    CommonModule,
    AuthMenuSectionModule,
    RouterModule.forChild(CreateRoutingModule)
  ],
  declarations: [
    StartComponent,
    IndexComponent,
    GetComponent
  ]
})
export class CreateModule { }
