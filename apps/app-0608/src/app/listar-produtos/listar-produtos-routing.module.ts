import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProdutosPage } from './listar-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProdutosPageRoutingModule {}
