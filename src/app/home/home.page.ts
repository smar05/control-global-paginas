import { Component } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public servicio:ServicioService,public router:Router,public navCtrl:NavController) {}

  ngOnInit()
  {
    this.servicio.userDetails()
    .subscribe(res =>{
      if(res != null)
      {
        this.servicio.setUid(res.uid);
      }else{
        this.servicio.logOut();
      }
    });
  }

  public cuenta()
  {
    this.router.navigate(['/cuenta']);
  }

  public productos()
  {
    this.router.navigate(['/productos']);
  }

  public pagina()
  {
    this.router.navigate(['/pagina']);
  }

  public pedidos()
  {
    this.router.navigate(['/pedidos']);
  }

}
