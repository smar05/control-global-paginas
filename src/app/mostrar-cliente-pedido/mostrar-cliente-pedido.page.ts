import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-cliente-pedido',
  templateUrl: './mostrar-cliente-pedido.page.html',
  styleUrls: ['./mostrar-cliente-pedido.page.scss'],
})
export class MostrarCLientePedidoPage implements OnInit {

  id : number = null;
  datos : any = {}
  productos : any = [];
  whatsapp : number = null;
  pagina : any = {}
  envio : any = {};

  constructor(public servicio:ServicioService) { }

  ngOnInit() {
    this.servicio.inicio();
    this.id = this.servicio.getIdPeCli();
    this.whatsapp = this.servicio.getWhatsapp();
    this.envio = this.servicio.getEnvio();
    this.servicio.getCliPedDatos(this.id,this.whatsapp).valueChanges()
    .subscribe(datos =>{
      this.datos = datos;
      this.datos.nombre = this.servicio.getNombre();
      this.datos.whatsapp = this.whatsapp;
      this.datos.correo = this.servicio.getCorreo();
      this.datos.departamento = this.envio.departamento;
      this.datos.ciudad = this.envio.ciudad;
      this.datos.direccion = this.envio.direccion;
    });
    this.servicio.getCLiPedProductos(this.id,this.whatsapp).valueChanges()
    .subscribe(productos=>{
      this.productos = productos;
    });
    this.servicio.getPagina().valueChanges()
    .subscribe(pagina =>{
      this.pagina = pagina;
      this.pagina.rotulos = 1;
    });
  }

  public productosOrganizar()
  {
    this.productos = this.servicio.ordenar(this.productos,'nombre');
    return this.productos;
  }

  public back()
  {
    this.servicio.back();
  }

  public delete()
  {    
    this.confirmar('Eliminar','si','No','Pedido eliminado','El pedido ha sido eliminado con exito');
    //this.servicio.presentAlert('Eliminado','Registro eliminado');
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
        this.servicio.deleteCliRegistro(this.id,this.whatsapp);
        this.back();
      }
    })
  }

  public cotizacion()
  {
    this.servicio.exito('Generando cotizacion');
    this.servicio.createCotizacion(this.pagina,this.datos,this.productos);    
  }

  public rotulo()
  {
    this.servicio.exito('Generando Rotulo');
    this.servicio.createRotulo(this.pagina,this.datos,this.productos);
  }

  public sendWha()
  {
    this.servicio.sendWha(this.datos,this.productos,this.datos.whatsapp);
  }

}
