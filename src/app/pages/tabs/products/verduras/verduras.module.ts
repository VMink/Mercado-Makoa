import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerdurasPageRoutingModule } from './verduras-routing.module';

import { VerdurasPage } from './verduras.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerdurasPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [VerdurasPage]
})
export class VerdurasPageModule {}
