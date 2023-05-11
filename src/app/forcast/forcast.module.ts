import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForcastPageRoutingModule } from './forcast-routing.module';

import { ForcastPage } from './forcast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForcastPage,
    ForcastPageRoutingModule
  ],

})
export class ForcastPageModule {}
