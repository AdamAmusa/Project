import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForcastPage } from './forcast.page';

const routes: Routes = [
  {
    path: '',
    component: ForcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcastPageRoutingModule {}
