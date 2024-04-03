import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDadosPage } from './listar-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDadosPageRoutingModule {}
