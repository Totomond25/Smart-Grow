import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartGrowingPageRoutingModule } from './smart-growing-routing.module';

import { SmartGrowingPage } from './smart-growing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartGrowingPageRoutingModule
  ],
  declarations: [SmartGrowingPage]
})
export class SmartGrowingPageModule {}
