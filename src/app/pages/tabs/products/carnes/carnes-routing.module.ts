import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarnesPage } from './carnes.page';

const routes: Routes = [
  {
    path: '',
    component: CarnesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarnesPageRoutingModule {}
