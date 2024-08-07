import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarProdutosPageRoutingModule } from './listar-produtos-routing.module';

import { ListarProdutosPage } from './listar-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarProdutosPageRoutingModule
  ],
  declarations: [ListarProdutosPage]
})
export class ListarProdutosPageModule {}
