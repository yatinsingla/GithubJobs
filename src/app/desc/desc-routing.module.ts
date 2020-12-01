import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescPage } from './desc.page';

const routes: Routes = [
  {
    path: '',
    component: DescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescPageRoutingModule {}
