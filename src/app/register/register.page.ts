import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario : any = {uid:null, nombre:null,apellido:null,cedula:null,celular:null,email:null}
  password : string = null;
  verPassword : boolean = true;

  constructor(public servicio:ServicioService) { }

  ngOnInit() {
  }

  public back()
  {
    this.servicio.back();
  }

  public register()
  {
    if(this.password.length >= 6)
    {
      this.servicio.register(this.usuario,this.password);
      this.servicio.userDetails()
      .subscribe(res=>{
        if(res != null)
        {
          this.usuario.uid = res.uid;
          this.servicio.saveDatosUsuario(this.usuario);
        }
      });
    }else
    {
      this.servicio.presentAlert('Error','La contraseña debe ser de 6 caracteres o mas');
    }
  }

  public ver()
  {
    if(this.verPassword == true)
    {
      this.verPassword = false;
    }else if(this.verPassword == false)
    {
      this.verPassword = true;
    }
  }

}
