import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoPageRoutingModule } from './pago-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { PagoPage } from './pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [PagoPage]
})
export class PagoPageModule {}
