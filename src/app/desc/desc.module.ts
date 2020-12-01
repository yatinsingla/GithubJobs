import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescPageRoutingModule } from './desc-routing.module';

import { DescPage } from './desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescPageRoutingModule
  ],
  declarations: [DescPage]
})
export class DescPageModule {}
