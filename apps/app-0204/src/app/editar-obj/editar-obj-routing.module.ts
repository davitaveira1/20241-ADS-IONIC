import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarObjPage } from './editar-obj.page';

const routes: Routes = [
  {
    path: '',
    component: EditarObjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarObjPageRoutingModule {}
