import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartGrowingPage } from './smart-growing.page';

const routes: Routes = [
  {
    path: '',
    component: SmartGrowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartGrowingPageRoutingModule {}
