import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: 'products',
    redirectTo: 'frutas'
  },
  {
    path: 'frutas',
    loadChildren: () => import('./frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'verduras',
    loadChildren: () => import('./verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'quesos',
    loadChildren: () => import('./quesos/quesos.module').then( m => m.QuesosPageModule)
  },
  {
    path: 'carnes',
    loadChildren: () => import('./carnes/carnes.module').then( m => m.CarnesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
