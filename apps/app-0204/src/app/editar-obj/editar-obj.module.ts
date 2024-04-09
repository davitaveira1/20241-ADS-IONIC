import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarObjPageRoutingModule } from './editar-obj-routing.module';

import { EditarObjPage } from './editar-obj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarObjPageRoutingModule
  ],
  declarations: [EditarObjPage]
})
export class EditarObjPageModule {}
