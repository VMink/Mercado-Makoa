import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuesosPage } from './quesos.page';

const routes: Routes = [
  {
    path: '',
    component: QuesosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuesosPageRoutingModule {}
