import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgbModule

  ],   providers: [NgbActiveModal],

})
export class ShopModule { }
