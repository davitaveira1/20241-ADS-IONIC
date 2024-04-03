import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarDadosObjetoPageRoutingModule } from './visualizar-dados-objeto-routing.module';

import { VisualizarDadosObjetoPage } from './visualizar-dados-objeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarDadosObjetoPageRoutingModule
  ],
  declarations: [VisualizarDadosObjetoPage]
})
export class VisualizarDadosObjetoPageModule {}
