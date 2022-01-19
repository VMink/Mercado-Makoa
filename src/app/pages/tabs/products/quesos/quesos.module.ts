import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuesosPageRoutingModule } from './quesos-routing.module';

import { QuesosPage } from './quesos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuesosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [QuesosPage]
})
export class QuesosPageModule {}
