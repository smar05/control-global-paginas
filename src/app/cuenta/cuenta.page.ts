import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  usuario : any = {uid:null,nombre:null,apellido:null,cedula:null,celular:null,correo:null}
  public loading : boolean = true;

  constructor(public servicio:ServicioService) { }

  ngOnInit() {
    this.servicio.inicio();
    this.usuario.uid = this.servicio.getUid();
    this.servicio.getDatosUsuario(this.usuario.uid).valueChanges()
    .subscribe(res=>{
      this.usuario = res;
      this.loading = false;
    });
  }

  public guardar()
  {
    this.servicio.saveDatosUsuario(this.usuario);
    this.servicio.exito('Datos actualizados');
    //this.servicio.presentAlert('Guardado','Datos guardados con exito');
    this.back();
  }

  public salir()
  {    
    this.confirmar('Salir','Si','No','Listo','Has salido de tu cuenta');
    //this.servicio.presentAlert('Exito','Has salido de tu cuenta');
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
        this.servicio.logOut();
        Swal.fire(
          tituloConfirmado,
          textoConfirmado,
          'success'
        )
      }
    })
  }

  public back()
  {
    this.servicio.back();
  }

}
