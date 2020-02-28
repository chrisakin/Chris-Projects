import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { StartComponent } from './start/start.component';
import { GetComponent } from './get/get.component';

export const CreateRoutingModule: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'get',
    component: GetComponent
  }
];
