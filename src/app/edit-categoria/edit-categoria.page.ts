import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.page.html',
  styleUrls: ['./edit-categoria.page.scss'],
})
export class EditCategoriaPage implements OnInit {

  idC : number = null;
  categoria : any = {id:null,nombre:null};
  productos : any = [];

  constructor(public servicio:ServicioService) { }

  ngOnInit() {
    this.servicio.inicio();
    this.idC = this.servicio.getIdC();
    if(this.idC != 0)
    {
      this.servicio.getCategoria(this.idC).valueChanges()
      .subscribe(categoria=>
        {
          this.categoria = categoria;
        });
    }
  }

  public back()
  {
    this.servicio.back();
  }

  public save()
  {
    if(this.idC == 0)
    {
      this.idC = Date.now();
      this.servicio.setIdC(this.idC);
      this.categoria.id= this.idC;
      this.servicio.exito('Categoria creada');
      //this.servicio.presentAlert('Creado','Categoria creada con exito');
    }else
    {
      this.servicio.exito('Categoria actualizada');
      //this.servicio.presentAlert('Guardado','Categoria guardada con exito');
    }
    this.servicio.saveCategoria(this.categoria);
    this.servicio.back();
  }

  public delete()
  {    
    this.confirmar('Eliminar','si','No','Categoria eliminada','La categoria ha sido eliminada con exito');
    //this.servicio.presentAlert('Eliminado','Catgoria eliminada');
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
        this.servicio.getProductos().valueChanges().subscribe(datos=>{
          this.productos = datos;
          console.log('Datos eliminados');
          for(let i=0 ; i<this.productos.length ; i++){
            if(this.productos[i].categoria == this.categoria.id){
              this.servicio.deleteProducto(this.productos[i].id);
            }
          }
        });
        this.servicio.deleteCategoria(this.categoria);
        this.back();
      }
    })
  }

}
