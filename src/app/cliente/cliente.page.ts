import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  idCLi : number = null;
  cliente : any = {};
  pedidos : any = [];
  loading : boolean = true;

  constructor(public servicio:ServicioService,public router:Router) { }

  ngOnInit() {
    this.servicio.inicio();
    this.idCLi = this.servicio.getIdCLi();
    this.servicio.getDatosCliente(this.idCLi).valueChanges()
    .subscribe(datos =>{
      this.cliente = datos;
    });
    this.servicio.getPedidosCliente(this.idCLi).valueChanges()
    .subscribe(pedidos=>{
      this.pedidos = pedidos;
      this.loading = false;
    });
  }

  public back()
  {
    this.servicio.back();
  }

  public goToPedido(id:number)
  {
    let envio : any = {departamento:this.cliente.departamento,ciudad:this.cliente.ciudad,direccion:this.cliente.direccion}
    this.servicio.setIdPeCli(id,this.cliente.whatsapp,this.cliente.nombre,this.cliente.correo,envio);
    this.router.navigate(['/mostrar-cliente-pedido']);
  }

  public editCliente()
  {
    this.servicio.editCliente(this.cliente);
    this.servicio.exito('Cliente actualizado');
    //this.servicio.presentAlert('Listo','Cliente actualizado con exito');
    this.back();
  }

  public deleteCliente()
  {   
    this.confirmar('Eliminar','si','No','Cliente eliminado','El cliente ha sido eliminado con exito'); 
    //this.servicio.presentAlert('Eliminado','Cliente eliminado con exito');
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
        this.servicio.deleteCliente(this.cliente.whatsapp);
        this.back();
      }
    })
  }

}
