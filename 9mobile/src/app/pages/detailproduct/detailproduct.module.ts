import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailproductPage } from './detailproduct.page';
import {ModalInfoPage} from "../modal-info/modal-info.page";
import {ModalInfoPageModule} from "../modal-info/modal-info.module";

const routes: Routes = [
  {
    path: '',
    component: DetailproductPage
  }
];

@NgModule({
  entryComponents:[ModalInfoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

      ModalInfoPageModule
  ],
  declarations: [DetailproductPage]
})
export class DetailproductPageModule {}
