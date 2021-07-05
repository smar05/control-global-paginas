import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarCLientePedidoPageRoutingModule } from './mostrar-cliente-pedido-routing.module';

import { MostrarCLientePedidoPage } from './mostrar-cliente-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarCLientePedidoPageRoutingModule
  ],
  declarations: [MostrarCLientePedidoPage]
})
export class MostrarCLientePedidoPageModule {}
