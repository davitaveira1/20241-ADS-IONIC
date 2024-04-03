import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDadosPageRoutingModule } from './listar-dados-routing.module';

import { ListarDadosPage } from './listar-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDadosPageRoutingModule
  ],
  declarations: [ListarDadosPage]
})
export class ListarDadosPageModule {}
