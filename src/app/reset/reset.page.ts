import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  public email : string = null;

  constructor(public servicio : ServicioService) { }

  ngOnInit() {
  }

  public back()
  {
    this.servicio.back();
  }

  public changePassword()
  {
    if(this.email == null)
    {
      this.servicio.presentAlert('Error','Ingrese un correo electronico');
    }else
    {
      this.servicio.changePassword(this.email)
      .then(res=>
        {
          console.log('Enviando');
          this.servicio.presentAlert('Listo','Verifique su correo electronico y cambie la contraseña');
        })
      .catch(err=>
        {
          console.log('Error');
          this.servicio.presentAlert('Error','El correo no existe o no esta registrado');
        });
    }
    this.servicio.back();
  }

}

