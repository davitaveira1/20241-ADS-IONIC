import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarDadosPage } from './visualizar-dados.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarDadosPageRoutingModule {}
