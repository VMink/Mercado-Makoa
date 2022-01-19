import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoFuncionaPageRoutingModule } from './como-funciona-routing.module';

import { ComoFuncionaPage } from './como-funciona.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoFuncionaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComoFuncionaPage]
})
export class ComoFuncionaPageModule {}
