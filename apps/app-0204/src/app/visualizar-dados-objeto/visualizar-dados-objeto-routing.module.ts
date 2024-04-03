import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarDadosObjetoPage } from './visualizar-dados-objeto.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarDadosObjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarDadosObjetoPageRoutingModule {}
