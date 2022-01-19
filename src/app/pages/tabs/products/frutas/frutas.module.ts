import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutasPageRoutingModule } from './frutas-routing.module';

import { FrutasPage } from './frutas.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutasPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [FrutasPage]
})
export class FrutasPageModule {}
