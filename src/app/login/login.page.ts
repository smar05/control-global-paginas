import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string = null;
  password : string = null;
  verPassword : boolean = true;

  constructor(public servicio:ServicioService) { }

  ngOnInit() {
  }

  public ingresar()
  {
    this.servicio.login(this.email,this.password);
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
