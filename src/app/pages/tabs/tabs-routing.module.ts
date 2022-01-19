import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/products/frutas',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'products',
        children:[
          {
            path: 'frutas',
            loadChildren: () => import('./products/frutas/frutas.module').then( m => m.FrutasPageModule)
          },
          {
            path: 'verduras',
            loadChildren: () => import('./products/verduras/verduras.module').then( m => m.VerdurasPageModule)
          },
          {
            path: 'quesos',
            loadChildren: () => import('./products/quesos/quesos.module').then( m => m.QuesosPageModule)
          },
          {
            path: 'carnes',
            loadChildren: () => import('./products/carnes/carnes.module').then( m => m.CarnesPageModule)
          },
          {
            path: '',
            redirectTo: 'frutas',
            pathMatch: 'full'
          },   
        ]
      },
      {
        path: 'carrito',
        loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
      },
      {
        path: 'como-funciona',
        loadChildren: () => import('./como-funciona/como-funciona.module').then( m => m.ComoFuncionaPageModule)
      },
      {
        path: '',
        redirectTo: 'frutas',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}