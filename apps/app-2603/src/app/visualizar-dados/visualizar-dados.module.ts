import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarDadosPageRoutingModule } from './visualizar-dados-routing.module';

import { VisualizarDadosPage } from './visualizar-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarDadosPageRoutingModule
  ],
  declarations: [VisualizarDadosPage]
})
export class VisualizarDadosPageModule {}
