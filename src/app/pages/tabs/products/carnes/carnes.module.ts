import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnesPageRoutingModule } from './carnes-routing.module';

import { CarnesPage } from './carnes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [CarnesPage]
})
export class CarnesPageModule {}
