import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarCLientePedidoPage } from './mostrar-cliente-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarCLientePedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarCLientePedidoPageRoutingModule {}
