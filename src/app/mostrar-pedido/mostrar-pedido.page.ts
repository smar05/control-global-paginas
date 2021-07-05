import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-pedido',
  templateUrl: './mostrar-pedido.page.html',
  styleUrls: ['./mostrar-pedido.page.scss'],
})
export class MostrarPedidoPage implements OnInit {

  linkWha : string = null;
  cuerpoEmail : string = null;
  idP : number = null;
  datos : any = {id:null,nombre:null,total:null,envio:null,subTotal:null,iva:0,descuento:0,correo:null,whatsapp:null,nota:null,fecha:null,asesor:null};
  productos : any=[{id:null,nombre:null,cantidad:null,precio:null}];
  facturacion : any = {nombre:null,correo:null,indicativo:null,whatsapp:null,direccion:null};
  pagina : any = {};
  whatsapp : number = null;
  loading : boolean = true;

  constructor(public servicio:ServicioService,public router:Router) { }

  ngOnInit() {
    this.servicio.inicio();
    this.idP = this.servicio.getIdp();
    this.servicio.getPagina().valueChanges()
    .subscribe(pagina =>{
      this.pagina = pagina;
      this.facturacion = pagina;
      this.facturacion.rotulos = 1;
    });    
    this.servicio.getPedidoDatos(this.idP).valueChanges()
    .subscribe(datos =>{
      if(datos != null)
      {
        this.datos = datos;
        this.whatsapp = this.datos.whatsapp;
      }
    });
    this.servicio.getPedidoProductos(this.idP).valueChanges()
    .subscribe(productos=>{
      if(productos != null){
        this.productos = productos;
      }
    });
    this.total();
    this.loading = false;
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

  public total()
  {
    this.datos.total = 0;
    for(let i=0;i<this.productos.length;i++)
    {
      if(this.productos[i].cantidad != 0){
        this.datos.total += this.productos[i].precio*this.productos[i].cantidad;
      }      
    }
    if(((this.datos.iva == 0) || (this.datos.iva == null))&&((this.datos.descuento == 0) || (this.datos.descuento == null))&&((this.datos.envio == 0) || (this.datos.envio == null))){
      this.datos.subTotal = null;
    }else{
      this.datos.subTotal = this.datos.total;
    }
    let iva : number = this.datos.iva;
    let descuento : number = this.datos.descuento;
    let envio : number = this.datos.envio;
    if((this.datos.iva == null)||(this.datos.iva == undefined)){
      iva = 0;
    }
    if((this.datos.descuento == null)||(this.datos.descuento == undefined)){
      descuento = 0;
    }
    if((this.datos.envio == null)||(this.datos.envio == undefined)){
      envio = 0;
    }
    this.datos.total *=(1-(descuento/100));
    this.datos.total *=(1+(iva/100));    
    this.datos.total += envio;
  }

  public calcular()
  {
    this.servicio.exito('Datos actualizados');
    this.total();
    this.servicio.savePedido(this.datos,this.productos);
    //this.servicio.presentAlert('Listo','Pedido Actualizado');
    this.back();
  }

  public delete()
  {
    this.confirmar('Eliminar','si','No','Pedido eliminado','El pedido ha sido eliminado con exito');
    //this.servicio.presentAlert('Eliminado','Pedido eliminado con exito');
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
        this.servicio.deletePedido(this.idP);
        this.back();
      }
    })
  }

  public sendWha()
  {
    this.servicio.sendWha(this.datos,this.productos,this.whatsapp);
  }

  /*
  public sendEmail()
  {
    this.cuerpoEmail = 'Nuevo pedido\nCliente: '+this.datos.nombre+'\n\n';
    for(let i=0;i<this.productos.length;i++)
    {
      if(!((this.productos[i].cantidad == 0)||(this.productos[i].cantidad == null))){
        this.cuerpoEmail+=this.productos[i].cantidad+'x'+this.productos[i].nombre+' $'+this.productos[i].precio+'\n';
      }            
    }
    if(!((this.datos.nota == null)||(this.datos.nota == ''))){
      this.cuerpoEmail+='\nNota:\n'+this.datos.nota;
    }
    if(!((this.datos.departamento == null)||(this.datos.departamento == ''))&& !((this.datos.ciudad == null)||(this.datos.ciudad == ''))){
      this.cuerpoEmail+='\nDepartamento:\n'+this.datos.departamento;
      this.cuerpoEmail+='\nCiudad:\n'+this.datos.ciudad;
    }
    if(!((this.datos.direccion == null)||(this.datos.direccion == ''))){
      this.cuerpoEmail+='\nDireccion:\n'+this.datos.direccion;
    }
    if(!((this.datos.iva == null)||(this.datos.iva == ''))){
      this.cuerpoEmail += '\n\nImpuestos: %'+this.datos.iva;
      this.cuerpoEmail += '\nSubtotal: $'+this.datos.subTotal;
    }
    this.cuerpoEmail+='\nTotal: $'+this.datos.total;
    this.servicio.sendEmail(this.datos.correo,'Nuevo pedido',this.cuerpoEmail);
  }
  */

  public guardarPedido()
  {
    this.datos.whatsapp = this.datos.whatsapp.toString();
    this.servicio.saveCliente(this.datos,this.productos);    
    this.back();
  }

  public cotizacion()
  {    
    this.servicio.exito('Generando cotizacion');
    this.servicio.createCotizacion(this.facturacion,this.datos,this.productos);
  }

  public rotulo()
  {
    this.servicio.exito('Generando rotulo');
    this.servicio.createRotulo(this.facturacion,this.datos,this.productos);
  }

}
