import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form1Page } from './form1.page';

const routes: Routes = [
  {
    path: '',
    component: Form1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form1PageRoutingModule {}
