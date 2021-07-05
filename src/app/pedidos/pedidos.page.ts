import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  public pedidos : any = [];
  public loading : boolean = true;
  public aux : boolean = false;

  constructor(public servicio:ServicioService,public router:Router) { }

  ngOnInit() {
    this.servicio.inicio();
    this.servicio.getPedidos().valueChanges()
    .subscribe(pedidos=>{
      this.pedidos = pedidos;
      this.loading = false;
    });
  }

  public back()
  {
    this.servicio.back();
  }

  public mostrar(a:number)
  {
    this.servicio.setIdp(a);
    this.router.navigate(['/mostrar-pedido']);
  }

  public delete()
  {
    this.confirmar('Eliminar','si','No','Pedidos eliminados','Los pedidos han sido eliminados con exito');
  }

  public confirmar(titulo:string,botonSi:string,botonNo:string,tituloConfirmado:string,textoConfirmado:string)
  {
    Swal.fire({
      title: titulo,
      //text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: botonSi,
      cancelButtonText:botonNo
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          tituloConfirmado,
          textoConfirmado,
          'success'
        )
        this.servicio.deletePedidos();
        this.back();
      }
    })
  }

}
